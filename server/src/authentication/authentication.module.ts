import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { EmployeeModule } from "src/employee/employee.module";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { jwtConstants } from './constants';

@Module({
  imports: [
    EmployeeModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}