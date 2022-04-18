import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employee/employee.entity';
import { EmployeeModule } from '../employee/employee.module';
import { ReportingController } from './reporting.controller';
import { Reporting } from './reporting.entity';
import { ReportingService } from './reporting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reporting, Employee]), EmployeeModule],
  controllers: [ReportingController],
  providers: [ReportingService],
  exports: [ReportingService],
})
export class ReportingModule {}
