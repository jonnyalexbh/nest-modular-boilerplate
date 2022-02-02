import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { Client, ClientSchema } from './entities/clients.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [],
})
export class ClientsModule {}
