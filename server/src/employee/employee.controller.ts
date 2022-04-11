import { Body, ConflictException, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, GetEmployeeDto, GetManagerDto } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  
  @Post(':employeeId/manager/:managerId')
  addManager(@Param('employeeId') getEmployeeDto: GetEmployeeDto, @Param('managerId') getManagerDto: GetManagerDto): Promise<Employee> {
    return this.employeeService.addManager(getEmployeeDto, getManagerDto);
  }


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
}
