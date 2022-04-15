import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateEmployeeReportingDo } from './dto/reporting.dto';
import { ReportingService } from './reporting.service';

@ApiTags('reporting')
@Controller('reporting')
export class ReportingController {
  constructor(private reportingService: ReportingService, private employeeService: EmployeeService) {}

  @Post()
  async create(@Body() { employeeId }: CreateEmployeeReportingDo) {
    try {
      const employee = await this.employeeService.findOne(employeeId);

      return this.reportingService.create(employee);
    }catch (error: any){
      throw new NotFoundException("Employee does not exists");
    }

  }

  @Get()
  findAll() {
    return this.reportingService.findAll();
  }
}
