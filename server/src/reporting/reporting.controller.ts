import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetEmployeeByIdDto } from 'src/employee/dto/employee.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { ReportingService } from './reporting.service';

@ApiTags('reporting')
@Controller('reporting')
export class ReportingController {
  constructor(private reportingService: ReportingService, private employeeService: EmployeeService) {}

  /**
   * TODO: handle error
   */
  @Post()
  async create(@Body() { employeeId: employeeId }: GetEmployeeByIdDto) {

    const employee = await this.employeeService.findOne(employeeId);

    return this.reportingService.create(employee);
  }

  @Get()
  findAll() {
    return this.reportingService.findAll();
  }
}
