import { Module } from '@nestjs/common';
import { HealthCheckController } from './controllers/healthCheck.controller';
import { SamplesController } from './controllers/samples.controller';
import { SamplesService } from './services/samples.service';

@Module({
  controllers: [HealthCheckController, SamplesController],
  providers: [SamplesService],
})
export class HealthCheckModule {}
