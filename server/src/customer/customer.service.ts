import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(customer: string): Promise<Customer> {
    return await this.customerRepository.save({ name: customer });
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(customerId: number): Promise<Customer> {
    return this.customerRepository.findOneOrFail({
      where: { id: customerId },
    });
  }

  findOneByName(name: string): Promise<Customer> {
    return this.customerRepository.findOneOrFail({
      where: { name: name },
    });
  }
}
