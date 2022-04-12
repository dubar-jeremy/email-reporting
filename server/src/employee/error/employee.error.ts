import { NotFoundException } from "@nestjs/common"

export class employeeExceptions {
  constructor() {}

  NOT_FOUND(){
    throw new NotFoundException('employee not found')
  }
}