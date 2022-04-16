import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../../src/employee/employee.entity';
import { Repository } from 'typeorm';
import { Manager } from './manager.entity';

@Injectable()
export class ManagerService {
  constructor(@InjectRepository(Manager) private managerRepository: Repository<Manager>) {}

   create(manager: Partial<Employee>): Promise<Manager> {
    return this.managerRepository.save(manager);
  }

  findAll(): Promise<Manager[]> {
    return this.managerRepository.find();
  }

   findOne(id: number): Promise<Manager> {
    return this.managerRepository.findOneOrFail(id);
  }
}
