import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from 'src/customer/customer.service';
import { ReportingService } from 'src/reporting/reporting.service';
import { CreateTaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService, private reportingService: ReportingService, private customerService: CustomerService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      // will throw an error if the reporting does not exist
     const reporting = await this.reportingService.findOne(createTaskDto.reportingId);
     
     const customer = await this.customerService.findOne(createTaskDto.customerId);

     const task = {
        ...createTaskDto,
        reporting: reporting,
        customer: customer
     };

      return await this.taskService.create(task);  
    }catch(error){
      throw new NotFoundException(error.message);
    } 
  }
}
