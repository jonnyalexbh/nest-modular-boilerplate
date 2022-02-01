import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  get() {
    return { message: 'Get all products' };
  }

  @Get(':id')
  getById(@Param('id') productId: string) {
    return { message: `Get product with id ${productId}` };
  }
}
