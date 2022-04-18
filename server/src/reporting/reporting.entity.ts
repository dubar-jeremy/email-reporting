import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { Task } from '../task/task.entity';

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
