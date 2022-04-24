import { Controller, Request, Post, UseGuards, Body, ConflictException } from '@nestjs/common';
import { Customer } from 'src/customer/customer.entity';
import { CreateCustomerDto } from 'src/customer/dto/customer.dto';
import { CustomerService } from '../customer/customer.service';
import { EmployeeService } from '../employee/employee.service';
import { ManagerService } from '../manager/manager.service';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthenticationController {
  constructor(
    private authenticationService: AuthenticationService,
    private employeeService: EmployeeService,
    private managerService: ManagerService,
    private customerService: CustomerService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authenticationService.login(req.user);
  }

  // TODO
  // check if customer exists
  // check if employee exists
  // check if manager exists
  @Post('register')
  async register(@Body() req) {
    const employee = await this.employeeService.create(req.employee[0]);
    const manager = await this.managerService.create(req.manager[0]);
    
    await this.employeeService.addManager(employee, manager);

    return this.authenticationService.register(employee);
  }
}
