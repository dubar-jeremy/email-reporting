import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;
}
