import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SamplesService } from '../services/samples.service';

@ApiTags('samples')
@Controller('samples')
export class SamplesController {
  constructor(private samplesService: SamplesService) {}
  @Get()
  get() {
    return this.samplesService.findAll();
    // return { message: 'Get all samples' };
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) sampleId: number) {
    return this.samplesService.findOne(sampleId);
    // return { message: `Get sample with id ${sampleId}` };
  }

  @Post()
  store(@Body() payload: any) {
    return this.samplesService.create(payload);
    // return { payload };
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.samplesService.update(id, payload);
    // return { message: `Put sample with id ${sampleId}` };
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) sampleId: number) {
    return this.samplesService.remove(sampleId);
    // return { message: `Delete sample with id ${sampleId}` };
  }
}
