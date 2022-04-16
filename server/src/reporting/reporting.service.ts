import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../../src/employee/employee.entity';
import { Repository } from 'typeorm';
import { Reporting } from './reporting.entity';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(Reporting)
    private reportingRepository: Repository<Reporting>,
  ) {}

  create(employee: Employee): Promise<Reporting> {

    const reporting = this.reportingRepository.create({
      employee: employee,
    });

    return this.reportingRepository.save(reporting);
  }

  findAll(): Promise<Reporting[]> {
    return this.reportingRepository.find();
  }

  findOne(reportingId: number): Promise<Reporting> {
    return this.reportingRepository.findOneOrFail({
      where: {
        id: reportingId,
      },
    });
  }
}
