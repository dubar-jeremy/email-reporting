import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';
import { ManagerService } from '../manager/manager.service';
import { CustomerService } from '../customer/customer.service';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class AuthenticationService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService,
    private managerService: ManagerService,
    private customerService: CustomerService,
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

  async register(employee: Employee) {
    const payload = { employee: employee.email, sub: employee.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
