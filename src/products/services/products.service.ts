import { Injectable } from '@nestjs/common';
import { RedisService } from '../../commons/modules/redis/redis.service';

@Injectable()
export class ProductsService {
  constructor(private redisService: RedisService) {}
  async setCache() {
    const client = { client_id: 99, name: 'client99' };
    return await this.redisService.set('client-99', client);
  }

  async getClient() {
    return await this.redisService.get('client-99');
  }
}
