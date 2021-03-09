import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { StudentService } from './student.service';


@Processor('notifier')
export class StudentProcessor {
  private readonly logger = new Logger(StudentProcessor.name);

  constructor(private studentService: StudentService){
  }

  @Process()
  handleTranscode(job: Job) { 
    this.logger.debug('Start transcoding__________');
    this.logger.debug(job.data.foo);
    this.studentService.readFile();
    this.logger.debug('Transcoding completed__________');
  }
}