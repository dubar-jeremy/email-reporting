import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

