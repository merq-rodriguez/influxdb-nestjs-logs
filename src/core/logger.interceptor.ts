
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException, BadRequestException, Inject, Scope, BadGatewayException } from '@nestjs/common';
import { InfluxService } from '../common/providers/influx.service';
import { ILogger } from '../common/logger.interface';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly influxService: InfluxService){}

  private writeData(data: ILogger, now: number){
    const {connection, host, method, user_agent, endpoint} = data;
    try {
      this.influxService.influx.writeMeasurement('request', [
        {
          tags: { host, endpoint, },
          fields: { 
            connection,
            method, 
            user_agent, 
            response_timeout: Date.now() - now
          },
        }
      ])  
    } catch (error) {}
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp(); 
    const request = ctx.getRequest();

    const {host, connection, cookie} = request.headers;
    const user_agent = request.headers['user-agent'];
    const {url, method} = request;
    const now = Date.now();
     
    return next
      .handle()
      .pipe(
        tap(() =>{ 
          console.log(`Timeout: ${Date.now() - now}ms`)
          this.writeData(
            {endpoint: url, connection, method, user_agent, host} as ILogger,
            now
          );
          catchError(err => throwError(new BadGatewayException()))

        }),
      );
  }
}




