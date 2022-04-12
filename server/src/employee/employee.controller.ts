import { Body, ConflictException, Controller, Get, HttpException, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { throwError } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';
import {AddManagerDto, CreateEmployeeDto, GetEmployeeParamsDto } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    if (await this.employeeService.hasAccount(createEmployeeDto.email)) {
      throw new ConflictException('Employee already has an account');
    }

    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Patch(':employeeId/manager')
  async addManager(@Param() getEmployeeParamsDto: GetEmployeeParamsDto, @Body() addManagerDto: AddManagerDto) {
    try {
      return await this.employeeService.addManager(getEmployeeParamsDto.employeeId, addManagerDto.managerId);
    }catch(error: any) {
        return new NotFoundException
    }
  }
}
