import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Reporting } from 'src/reporting/reporting.entity';

export enum TypeFormat {
  INSTALL = 'install',
  TMA = 'tma',
  PROJECT = 'project',
}

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  type: TypeFormat;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}

export class FindReportingDto {
  reporting: Reporting;
}
