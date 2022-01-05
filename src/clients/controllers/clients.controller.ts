import { Controller, Get, Param, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller('clients')
export class ClientsController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get()
  get() {
    this.logger.log('we are getting all clients', ClientsController.name);
    return { message: 'Get all clients' };
  }

  @Get(':id')
  getById(@Param('id') userId: number) {
    return { message: `Get client with id ${userId}` };
  }
}
