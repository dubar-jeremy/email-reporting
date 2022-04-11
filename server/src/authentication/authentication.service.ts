import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

  async validateUser(email: string, password: string): Promise<unknown> {
    const user = await this.employeeRepository.findOne({
      where: {
        email: email,
        },
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (user && passwordMatch) {
      // ??
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}