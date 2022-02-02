import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from '../entities/clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Client.name) private clientModel: Model<Client>,
  ) {}

  async findAll() {
    const apiKey = this.configService.get('apiKey2');
    const dbName = this.configService.get('DATABASE_NAME2');
    console.log(apiKey, dbName);
    return this.clientModel.find().exec();
  }

  async findOne(id: string) {
    const client = await this.clientModel.findById(id).exec();
    if (!client) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return client;
  }
}
