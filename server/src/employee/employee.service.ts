import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/employee.dto';
import * as bcrypt from 'bcrypt';
import { ManagerService } from 'src/manager/manager.service';
import { Manager } from 'src/manager/manager.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,

    private managerService: ManagerService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    createEmployeeDto.password = bcrypt.hashSync(createEmployeeDto.password, parseInt(process.env.SALT_OR_ROUND));

    return this.employeeRepository.save(createEmployeeDto);
  }


  async addManager(employee: Employee, manager: Manager): Promise<Employee> {
  
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

  /**
   * TODO: Throw error and handle it in the controller
   */
  async findOne(employeeId: number): Promise<Employee> {
    return await this.employeeRepository.findOneOrFail({
      where: {
        id: employeeId,
      },
    });
  }
}
