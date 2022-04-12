import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateManagerDto } from './dto/manager.dto';
import { Manager } from './manager.entity';

@Injectable()
export class ManagerService {
  constructor(@InjectRepository(Manager) private managerRepository: Repository<Manager>) {}

  create(manager: CreateManagerDto): Promise<Manager> {
    return this.managerRepository.save(manager);
  }

  findAll(): Promise<Manager[]> {
    return this.managerRepository.find();
  }

  /**
   * TODO: Throw error and handle it in the controller
   */
  findOne(id: number): Promise<Manager> {
    return this.managerRepository.findOneOrFail(id);
  }
}
