import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfluxService } from "./providers/influx.service";
import { TypeOrmConfigService } from "./providers/ormconfig.service";
import Configuration from '../common/config.environment';
import { join } from 'path';

const envFilePath = join(process.cwd(), 'environments', 'development.env');

const PROVIDERS = [
  TypeOrmConfigService, 
  InfluxService,
]

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
      envFilePath,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  providers: [...PROVIDERS],
  exports: [...PROVIDERS]
})
export class CommonModule{}