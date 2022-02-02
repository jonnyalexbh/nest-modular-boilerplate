import { Module } from '@nestjs/common';
import config from './config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/controllers/products.module';
import { LoggerModule } from './commons/modules/logger.module';
import { ClientsService } from './clients/services/clients.service';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongo.uri'),
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
  providers: [ClientsService],
})
export class AppModule {}
