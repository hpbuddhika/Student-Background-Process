import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';
import { StudentService } from './student.service';


@Controller()
export class StudentController {
    constructor(private readonly studentService: StudentService,
        @InjectQueue('notifier') private readonly notifierQueue: Queue) {

        this.addJob();

        // studentService.addOne().then(
        //     data => {
        //         console.log("student DB data: " + JSON.stringify(data))
        //     }
        // )
        //     .catch(
        //         err => {
        //             console.log("db data fetching error: " + err);
        //         }
        //     )
    }



    async addJob() {
        console.log("job added----------------------------------------")
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