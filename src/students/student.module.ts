import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentEntity } from './student.entity';
import { BullModule } from '@nestjs/bull';
import { StudentProcessor } from './student.processor';



@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity]),
  BullModule.registerQueue({
    name: 'notifier',
  }),],
  providers: [StudentService,StudentProcessor],
  controllers: [StudentController],
  exports : [StudentService]
}) 
export class StudentModule { }