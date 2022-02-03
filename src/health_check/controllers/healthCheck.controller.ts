import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('healthCheck')
@Controller('health-check')
export class HealthCheckController {
  @Get()
  @ApiOperation({ summary: 'Health Check Application' })
  get() {
    return { time: new Date().toDateString() };
  }
}
