import { Injectable, OnModuleInit } from "@nestjs/common";
import { InfluxDB, ISingleHostConfig } from "influx";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class InfluxService implements OnModuleInit{
  influx: InfluxDB;

  constructor(private readonly config: ConfigService) { }
  
  async onModuleInit(){
    this.influx = this.createInstance()
  }

  private createInstance(): InfluxDB {
    return new InfluxDB(this.getConfig());
  }

  private getConfig(): ISingleHostConfig {
    return {
      database: this.config.get('influx.name'),
      host: this.config.get('influx.host'),
      port: this.config.get('influx.port'),
      username: this.config.get('influx.username'),
      password: this.config.get('influx.password'),
    } as ISingleHostConfig;
  }
}