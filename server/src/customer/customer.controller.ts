import { Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { type } from 'os';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async create(@Body() {name: customer}: CreateCustomerDto): Promise<Customer> {
    try {
      return await this.customerService.create(customer);
    }catch(error){
     if(error.code === 'ER_DUP_ENTRY'){
      throw new ConflictException('Customer already exists');
     }
    }
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
