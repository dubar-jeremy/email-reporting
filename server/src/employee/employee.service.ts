import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto, GetEmployeeDto, GetManagerDto } from './dto/employee.dto';
import { Manager } from 'src/manager/manager.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,

    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    createEmployeeDto.password = bcrypt.hashSync(createEmployeeDto.password, parseInt(process.env.SALT_OR_ROUND));

    return this.employeeRepository.save(createEmployeeDto);
  }


  async addManager(getEmployeeDto: GetEmployeeDto, getManagerDto: GetManagerDto): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: {
        id: getEmployeeDto,
      },
    });

    const manager = await this.managerRepository.findOne({
      where: {
        id: getManagerDto,
      },
    });

    employee.manager = manager;

    return this.employeeRepository.save(employee);
  }


  async getAllEmployees(): Promise<Employee[]> {
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
}
