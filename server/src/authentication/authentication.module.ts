import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { EmployeeModule } from '../employee/employee.module';
import { ManagerModule } from '../manager/manager.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [
    EmployeeModule,
    ManagerModule,
    CustomerModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
