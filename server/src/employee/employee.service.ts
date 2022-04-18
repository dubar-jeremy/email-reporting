import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import * as bcrypt from 'bcrypt';
import { Manager } from '../manager/manager.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(employee: Partial<Employee>): Promise<Employee> {
    employee.password = bcrypt.hashSync(employee.password, parseInt(process.env.SALT_OR_ROUND));

    await this.employeeRepository.save(employee);

    return await this.employeeRepository.findOne({
      where: {
        email: employee.email,
      },
    });
  }

  async addManager(employee: Employee, manager: Manager): Promise<Employee> {
    employee.manager = manager;

    return this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async hasAccount(email: string): Promise<boolean> {
    const employee = await this.employeeRepository.findOne({
      where: {
        email: email,
      },
    });

    if (employee) {
      return true;
    }

    return false;
  }

  async findOne(employeeId: number): Promise<Employee> {
    return await this.employeeRepository.findOneOrFail({
      where: {
        id: employeeId,
      },
    });
  }

  async findOneByEmail(email: string): Promise<Employee> {
    return await this.employeeRepository.findOneOrFail({
      where: {
        email: email,
      },
    });
  }
}
