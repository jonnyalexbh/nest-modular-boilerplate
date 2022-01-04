import { Controller, Get, Param } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  @Get()
  get() {
    return { message: 'Get all clients' };
  }

  @Get(':id')
  getById(@Param('id') userId: number) {
    return { message: `Get client with id ${userId}` };
  }
}
