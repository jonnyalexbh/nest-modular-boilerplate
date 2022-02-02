import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateClientDto {
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
