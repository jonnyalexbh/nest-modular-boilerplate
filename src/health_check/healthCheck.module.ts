import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AlbumsController } from './controllers/albums.controller';
import { HealthCheckController } from './controllers/healthCheck.controller';
import { SamplesController } from './controllers/samples.controller';
import { AlbumsService } from './services/albums.service';
import { SamplesService } from './services/samples.service';

@Module({
  imports: [HttpModule],
  controllers: [HealthCheckController, SamplesController, AlbumsController],
  providers: [SamplesService, AlbumsService],
})
export class HealthCheckModule {}
