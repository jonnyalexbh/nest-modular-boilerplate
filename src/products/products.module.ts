import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { RedisModule } from '../commons/modules/redis/redis.module';
import { ProductsService } from './services/products.service';

@Module({
  imports: [RedisModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [],
})
export class ProductsModule {}
