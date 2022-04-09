import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, FindReportingDto } from './dto/task.dto';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post(':reportingId')
  create(
    @Param('reportingId') findReportingDto: FindReportingDto,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.taskService.create(findReportingDto, createTaskDto);
  }
}
