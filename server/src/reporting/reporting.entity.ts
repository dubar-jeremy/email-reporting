import { Employee } from '../../src/employee/employee.entity';
import { Task } from '../../src/task/task.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reporting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.reporting, {
    eager: true,
  })
  employee: Employee;

  @OneToMany(() => Task, (task) => task.reporting, {
    eager: true,
  })
  task: Task[];
}
