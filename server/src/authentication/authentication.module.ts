import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]), 
    EmployeeModule, 
    // JwtModule.register({
    //   secret: 'jwtConstants.secret',
    //   signOptions: { expiresIn: '60s' },
    // }),
],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
