import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column({
    unique: true,
  })
  email: string;

  @OneToMany(() => Employee, (employee) => employee.manager)
  employee: Employee[];
}
