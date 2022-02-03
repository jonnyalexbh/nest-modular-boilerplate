import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'Client name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly age: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
