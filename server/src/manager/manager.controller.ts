import { Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateManagerDto } from './dto/manager.dto';
import { ManagerService } from './manager.service';

@ApiTags('manager')
@Controller('manager')
export class ManagerController {
  constructor(private managerService: ManagerService) {}

  @Post()
  async create(@Body() manager: CreateManagerDto) {
    try {
      return await this.managerService.create(manager);
    }catch(error: any) {
      if(error.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('Manager already exists');
       }
    }
  }

  @Get()
  findAll() {
    return this.managerService.findAll();
  }
}
