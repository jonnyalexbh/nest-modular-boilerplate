import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/controllers/products.module';
import { LoggerModule } from './commons/modules/logger.module';
import { ClientsService } from './clients/services/clients.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    LoggerModule,
    ClientsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [ClientsService],
})
export class AppModule {}
