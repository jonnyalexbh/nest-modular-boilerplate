import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sample } from '../entities/samples.entity';

@Injectable()
export class SamplesService {
  constructor(private configService: ConfigService) {}
  private sampleId = 102;
  private samples: Sample[] = [
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
    const apiKey = this.configService.get('mongo.dbName');
    const dbName = this.configService.get('api.port');
    console.log(apiKey, dbName);
    return this.samples;
  }

  findOne(id: number) {
    const sample = this.samples.find((sample) => sample.id === id);
    if (!sample) {
      throw new NotFoundException(`Sample with #${id} not found`);
    }
    return sample;
  }

  create(data: any) {
    this.sampleId = this.sampleId + 1;
    const newSample = { id: this.sampleId, ...data };
    this.samples.push(newSample);
    return newSample;
  }

  update(id: number, changes: any) {
    const sample = this.findOne(id);
    const index = this.samples.findIndex((item) => item.id === id);
    this.samples[index] = {
      ...sample,
      ...changes,
    };
    return this.samples[index];
  }

  remove(id: number) {
    const index = this.samples.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Sample with #${id} not found`);
    }
    this.samples.splice(index, 1);
    return true;
  }
}
