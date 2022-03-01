import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Album } from '../entities/albums.entity';
@Injectable()
export class AlbumsService {
  constructor(private httpService: HttpService) {}

  async findAll(): Promise<Album[]> {
    const result = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/albums'),
    );
    return result.data;
  }
}
