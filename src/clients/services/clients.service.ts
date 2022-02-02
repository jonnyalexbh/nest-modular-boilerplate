import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from '../dtos/client.dto';
import { Client } from '../entities/clients.entity';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async findAll() {
    return this.clientModel.find().exec();
  }

  async findOne(id: string) {
    const client = await this.clientModel.findById(id).exec();
    if (!client) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return client;
  }

  create(client: CreateClientDto) {
    const newClient = new this.clientModel(client);
    return newClient.save();
  }
}
