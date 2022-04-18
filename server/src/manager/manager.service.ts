import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee/employee.entity';
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

  findOneByEmail(email: string): Promise<Manager> {
    return this.managerRepository.findOneOrFail({
      where: {
        email: email,
      },
    });
  }
}
