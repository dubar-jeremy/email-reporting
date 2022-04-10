import { Customer } from 'src/customer/customer.entity';
import { Reporting } from 'src/reporting/reporting.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum TypeFormat {
  INSTALL = 'install',
  TMA = 'tma',
  PROJECT = 'project',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TypeFormat,
    default: TypeFormat.INSTALL,
  })
  type: TypeFormat;

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
