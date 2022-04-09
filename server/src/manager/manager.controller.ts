import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateManagerDto } from './dto/manager.dto';
import { ManagerService } from './manager.service';

@ApiTags('manager')
@Controller('manager')
export class ManagerController {
  constructor(private managerService: ManagerService) {}

  @Post()
  create(@Body() manager: CreateManagerDto) {
    return this.managerService.create(manager);
  }

  @Get()
  findAll() {
    return this.managerService.findAll();
  }
}
