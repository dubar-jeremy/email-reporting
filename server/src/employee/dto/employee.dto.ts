import { ParseIntPipe } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

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

export class GetEmployeeParamsDto {
  @IsInt()
  @Type(() => Number)
  employeeId: number
}

export class AddManagerDto {
  @IsInt()
  @Type(() => Number)
  managerId: number;
}