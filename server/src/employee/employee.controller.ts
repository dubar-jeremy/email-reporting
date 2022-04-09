import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateEmployeeDto,
  GetEmployeeDto,
  GetManagerDto,
} from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post(':employeeId/manager/:managerId')
  addManager(
    @Param('employeeId') getEmployeeDto: GetEmployeeDto,
    @Param('managerId') getManagerDto: GetManagerDto,
  ) {
    return this.employeeService.addManager(getEmployeeDto, getManagerDto);
  }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.find();
  }
}
