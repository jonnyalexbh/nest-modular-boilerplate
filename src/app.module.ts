import { Module } from '@nestjs/common';

import { ClientsModule } from './clients/controllers/clients.module';
import { ProductsModule } from './products/controllers/products.module';
import { LoggerModule } from './commons/modules/logger.module';
@Module({
  imports: [LoggerModule, ClientsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
