import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';

@Module({
  imports: [],
  controllers: [ClientsController],
  exports: [],
})
export class ClientsModule {}
