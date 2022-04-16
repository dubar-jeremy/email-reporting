import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EmployeeService } from 'src/employee/employee.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const employee = await this.employeeService.findOneByEmail(email);

    const passwordMatch = bcrypt.compare(password, employee.password);

    if (employee && passwordMatch) {
      const { password, ...result } = employee;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { employee: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}