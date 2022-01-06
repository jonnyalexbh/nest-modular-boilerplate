import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [],
})
export class ClientsModule {}
