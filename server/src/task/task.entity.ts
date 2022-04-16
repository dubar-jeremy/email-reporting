import { Customer } from '../../src/customer/customer.entity';
import { Reporting } from '../../src/reporting/reporting.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
