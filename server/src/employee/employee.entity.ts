import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Manager } from '../manager/manager.entity';
import { Reporting } from '../reporting/reporting.entity';

@Entity()
export class Employee {
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

  @Column()
  password: string;

  @ManyToOne(() => Manager, (manager) => manager.employee, {
    eager: true,
  })
  manager: Manager;

  @OneToMany(() => Reporting, (reporting) => reporting.employee)
  reporting: Reporting[];
}
