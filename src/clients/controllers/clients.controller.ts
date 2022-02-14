import {
  Controller,
  Get,
  Post,
  Param,
  Inject,
  LoggerService,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateClientDto } from '../dtos/client.dto';
import { ClientsService } from '../services/clients.service';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(
    private clientsService: ClientsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Get()
  get() {
    // throw new NotFoundException('Entitlement not found.');
    this.logger.log('we are getting all clients', ClientsController.name);
    return this.clientsService.findAll();
    // return { message: 'Get all clients' };
  }

  @Get(':id')
  getById(@Param('id') userId: string) {
    return this.clientsService.findOne(userId);
    // return { message: `Get client with id ${userId}` };
  }

  @Post()
  create(@Body() payload: CreateClientDto) {
    this.logger.log({ payload }, ClientsController.name);
    return this.clientsService.create(payload);
    // return { payload };
  }
}
