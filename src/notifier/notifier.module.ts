import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { NotifierController } from './notifier.controller';
import { NotifierProcessor } from './notifier.processor';
import { NotifierService } from './notifier.service';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'notifier',
        }),
        
    ],
    controllers: [NotifierController],
    providers: [NotifierProcessor,NotifierService]
})
export class NotifierModule { }
