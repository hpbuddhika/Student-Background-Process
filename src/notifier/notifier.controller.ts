import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('notifier')
export class NotifierController {
    constructor(@InjectQueue('notifier') private readonly notifierQueue: Queue) {
       // this.addJob();

    }

    async addJob() {
        const job = await this.notifierQueue.add(
            {
                foo: 'bar',
            }, {
            repeat: {
                every: 1000,
                limit: 5
            }
        }
        );
    }




}