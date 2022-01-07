import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  async get() {
    const resp = await this.productsService.getClient();
    return resp;
  }
  // @Get()
  // get() {
  //   return { message: 'Get all products' };
  // }

  @Get(':id')
  getById(@Param('id') productId: string) {
    return { message: `Get product with id ${productId}` };
  }

  @Post()
  async storeId() {
    const jabh = await this.productsService.setCache();
    return { message: `Cache Ok`, data: jabh };
  }
}
