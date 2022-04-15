import { Exclude } from 'class-transformer';
import { Manager } from 'src/manager/manager.entity';
import { Reporting } from 'src/reporting/reporting.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

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

  @Column({
    select: false
  })
  password: string;

  @ManyToOne(() => Manager, (manager) => manager.employee, {
    eager: true,
  })
  manager: Manager;

  @OneToMany(() => Reporting, (reporting) => reporting.employee)
  reporting: Reporting[];
}
