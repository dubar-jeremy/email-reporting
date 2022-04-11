import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerModule } from './manager/manager.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './configurations/app.config';
import { databaseConfig } from './configurations/database.config';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ReportingModule } from './reporting/reporting.module';
import { TaskModule } from './task/task.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
      ],
      inject: [databaseConfig.KEY],
      useFactory: (config) => ({
        ...config,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ManagerModule,
    EmployeeModule,
    ReportingModule,
    CustomerModule,
    TaskModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
