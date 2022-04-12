import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerController } from './manager.controller';
import { Manager } from './manager.entity';
import { ManagerService } from './manager.service';

@Module({
  imports: [TypeOrmModule.forFeature([Manager])],
  controllers: [ManagerController],
  providers: [ManagerService],
  exports: [ManagerModule],
})
export class ManagerModule {}
