import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { Repository } from 'typeorm';
import { CreateReportingDto } from './dto/reporting.dto';
import { Reporting } from './reporting.entity';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(Reporting)
    private reportingRepository: Repository<Reporting>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createReportingDto: CreateReportingDto): Promise<Reporting> {
    const employeeReporting = await this.employeeRepository.findOne({
      where: { id: createReportingDto.employee },
    });

    const reporting = this.reportingRepository.create({
      employee: employeeReporting,
    });

    return this.reportingRepository.save(reporting);
  }

  findAll(): Promise<Reporting[]> {
    return this.reportingRepository.find();
  }
}
