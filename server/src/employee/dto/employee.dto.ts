import { ParseIntPipe } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
export class GetEmployeeByIdDto {
  @IsInt()
  @Type(() => Number)
  employeeId: number
}

export class AddManagerDto {
  @IsInt()
  @Type(() => Number)
  managerId: number;
}