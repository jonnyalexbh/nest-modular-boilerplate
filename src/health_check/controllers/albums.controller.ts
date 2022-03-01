import { Controller, Get } from '@nestjs/common';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../entities/albums.entity';
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  handler(): Promise<Album[]> {
    return this.albumsService.findAll();
  }
}
