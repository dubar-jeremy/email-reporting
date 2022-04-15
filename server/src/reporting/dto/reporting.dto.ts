import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEmployeeReportingDo {
  @IsNotEmpty()
  @IsNumber()
  employeeId: number;
}