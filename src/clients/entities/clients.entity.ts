import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
