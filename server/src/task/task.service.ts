import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporting } from 'src/reporting/reporting.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto, FindReportingDto } from './dto/task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(Reporting)
    private reportingRepository: Repository<Reporting>,
  ) {}

  async create(findReportingDto: FindReportingDto, createTaskDto: CreateTaskDto): Promise<Task> {
    const reporting = await this.reportingRepository.findOne({
      where: {
        id: findReportingDto,
      },
    });

    const task = this.taskRepository.create(createTaskDto);
    task.reporting = reporting;

    return await this.taskRepository.save(task);
  }
}
