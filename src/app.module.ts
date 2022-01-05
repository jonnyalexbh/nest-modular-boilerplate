import { Module } from '@nestjs/common';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

import { ClientsModule } from './clients/controllers/clients.module';
import { ProductsModule } from './products/controllers/products.module';
@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    }),
    ClientsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
