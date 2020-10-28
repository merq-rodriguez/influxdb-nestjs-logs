import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
   
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return this.getOrmConfig()
  }

  private getOrmConfig() {
    return {
      type: this.config.get('db.DB_TYPE'),
      host: this.config.get('db.DB_HOST'),
      port: this.config.get('db.DB_PORT'),
      username: this.config.get('db.DB_USERNAME'),
      password: this.config.get('db.DB_PASSWORD'),
      database: this.config.get('db.DB_DATABASE'),
      synchronize: this.config.get('database.BD_SYNCHRONIZE'),
      logging: this.config.get('db.DB_LOGGING'),
      entities: ["dist/entities/**/**.entity.js"],
    }
  } 
}