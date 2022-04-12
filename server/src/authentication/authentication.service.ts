import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>,  
    // private jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const employee = await this.employeeRepository.findOne({
      where: {
        email: email,
        },
    });

    const passwordMatch = bcrypt.compare(password, employee.password);

    if (employee && passwordMatch) {
      // ??
      const { password, ...result } = employee;
      return result;
    }

    return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}