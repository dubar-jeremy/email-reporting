import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { Manager } from 'src/manager/manager.entity';
import { Employee } from '../employee.entity';

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

export class GetManagerDto {
  manager: Manager;
}

export class GetEmployeeDto {
  employee: Employee;
}

export class FindUserDto {
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
