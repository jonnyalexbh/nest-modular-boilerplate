import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';

import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { LoggerModule } from './commons/modules/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    LoggerModule,
    ClientsModule,
    ProductsModule,
  ],
})
export class AppModule {}
