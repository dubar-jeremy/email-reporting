import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Reporting } from '../reporting/reporting.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @ManyToOne(() => Reporting, (reporting) => reporting.task)
  reporting: Reporting;

  @ManyToOne(() => Customer, (customer) => customer.task, {
    eager: true,
  })
  customer: Customer;
}
