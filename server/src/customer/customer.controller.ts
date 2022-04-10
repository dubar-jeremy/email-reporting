import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(
    @Body()
    customer: CreateCustomerDto,
  ) {
    return this.customerService.create(customer);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }
}
