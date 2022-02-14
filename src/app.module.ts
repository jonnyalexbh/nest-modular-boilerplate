import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import config from './config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { LoggerModule } from './commons/modules/logger.module';
import { HealthCheckModule } from './health_check/healthCheck.module';
import { AllExceptionsFilter } from './commons/filter/allException.filter';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongo.uri'),
        dbName: configService.get('mongo.dbName'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    LoggerModule,
    ClientsModule,
    HealthCheckModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
