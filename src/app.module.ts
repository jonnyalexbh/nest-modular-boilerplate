import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/controllers/clients.module';
import { ProductsModule } from './products/controllers/products.module';
@Module({
  imports: [ClientsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
