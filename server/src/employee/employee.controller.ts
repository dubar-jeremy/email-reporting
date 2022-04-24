import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { ManagerService } from '../manager/manager.service';
import { AddManagerDto, CreateEmployeeDto, GetEmployeeByIdDto } from './dto/employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService, private managerService: ManagerService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      return await this.employeeService.create(createEmployeeDto);
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Employee already exists');
      }
    }
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  /**
   * TODO: Improve how error is handled
   */
  @Patch(':employeeId/manager')
  async addManager(
    @Param() { employeeId }: GetEmployeeByIdDto,
    @Body() { managerId }: AddManagerDto,
  ): Promise<Employee> {
    try {
      const manager = await this.managerService.findOne(managerId);

      const employee = await this.employeeService.findOne(employeeId);

      return await this.employeeService.addManager(employee, manager);
    } catch (error: any) {
      throw new NotFoundException();
    }
  }
}
