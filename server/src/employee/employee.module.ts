import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Manager } from 'src/manager/manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Manager])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
