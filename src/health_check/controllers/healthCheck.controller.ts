import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  get() {
    return { time: new Date().toDateString() };
  }
}
