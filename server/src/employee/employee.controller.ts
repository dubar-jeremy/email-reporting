import { Body, ConflictException, Controller, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ManagerService } from 'src/manager/manager.service';
import {AddManagerDto, CreateEmployeeDto, GetEmployeeByIdDto } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService, private managerService: ManagerService) {}

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

  /**
   * TODO: Improve how error is handled
   */
  @Patch(':employeeId/manager')
  async addManager(
    @Param() { employeeId: employeeId }: GetEmployeeByIdDto, 
    @Body() { managerId: managerId }: AddManagerDto
    ): Promise<Employee> {
    try {
      const manager = await this.managerService.findOne(managerId);

      const employee = await this.employeeService.findOne(employeeId);

      return await this.employeeService.addManager(employee, manager);
    }catch(error: any) {
        throw new NotFoundException
    }
  }
}
