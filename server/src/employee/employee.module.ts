import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Manager } from 'src/manager/manager.entity';
import { LocalStrategy } from 'src/authentication/local.strategy';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Manager])],
  providers: [EmployeeService, LocalStrategy, AuthenticationService],
  controllers: [EmployeeController],
  exports: [EmployeeModule]
})
export class EmployeeModule {}
