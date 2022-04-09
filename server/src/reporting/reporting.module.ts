import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { ReportingController } from './reporting.controller';
import { Reporting } from './reporting.entity';
import { ReportingService } from './reporting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reporting, Employee])],
  controllers: [ReportingController],
  providers: [ReportingService],
})
export class ReportingModule {}
