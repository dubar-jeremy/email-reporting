import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/customer.dto';

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

  findOne(customerId): Promise<Customer> {
    return this.customerRepository.findOneOrFail({
      where: { id: customerId },
    });
  }
}
