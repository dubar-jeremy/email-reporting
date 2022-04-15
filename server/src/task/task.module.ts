import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Reporting } from 'src/reporting/reporting.entity';
import { ReportingModule } from 'src/reporting/reporting.module';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Reporting]), ReportingModule, CustomerModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
