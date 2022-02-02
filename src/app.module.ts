import { Module } from '@nestjs/common';
import config from './config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/controllers/products.module';
import { LoggerModule } from './commons/modules/logger.module';

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
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
