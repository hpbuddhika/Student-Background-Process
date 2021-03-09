import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { NotifierService } from './notifier.service';

@Processor('notifier')
export class NotifierProcessor {
  private readonly logger = new Logger(NotifierProcessor.name);

  constructor(private notifierService: NotifierService){
  }

  @Process()
  handleTranscode(job: Job) { 
    this.logger.debug('Start transcoding__________');
    this.logger.debug(job.data.foo);
    this.notifierService.readFile();
    this.logger.debug('Transcoding completed__________');
  }
}