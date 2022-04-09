import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateReportingDto } from './dto/reporting.dto';
import { ReportingService } from './reporting.service';

@ApiTags('reporting')
@Controller('reporting')
export class ReportingController {
  constructor(private reportingService: ReportingService) {}

  @Post()
  create(@Body() reporting: CreateReportingDto) {
    return this.reportingService.create(reporting);
  }

  @Get()
  findAll() {
    return this.reportingService.findAll();
  }
}
