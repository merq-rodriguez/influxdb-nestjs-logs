import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './core/logger.interceptor';
import { CommonModule } from './common/common.module';
import { UserModule } from './modules/users/user.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [CommonModule, UserModule, TaskModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
