import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(task: Partial<Task>): Promise<Task> {
    return this.taskRepository.save(task);
  }

  findOne(taskId: number): Promise<Task> {
    return this.taskRepository.findOneOrFail({
      where: { id: taskId },
    });
  }
}
