import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from '../entities/clients.entity';

@Injectable()
export class ClientsService {
  constructor(private configService: ConfigService) {}

  private clients: Client[] = [
    {
      id: 101,
      name: 'Tankis Alexis',
      age: 30,
      email: 'tankis@gmail.com',
    },
    {
      id: 102,
      name: 'Jerson Lopez',
      age: 26,
      email: 'jersi@gmail.com',
    },
  ];

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    console.log(apiKey, dbName);
    return this.clients;
  }
}
