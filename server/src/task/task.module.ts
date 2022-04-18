import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CustomerModule } from '../customer/customer.module';
import { Reporting } from '../reporting/reporting.entity';
import { ReportingModule } from '../reporting/reporting.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Reporting]), ReportingModule, CustomerModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
