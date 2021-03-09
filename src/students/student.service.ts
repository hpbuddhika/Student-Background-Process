import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Repository} from 'typeorm';
import { readFile, utils } from 'xlsx'

import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {

  public socket : Server = null;

  constructor(
    @InjectRepository(StudentEntity) private studentRepository: Repository<StudentEntity>,
    
  ) {
  }

  readFile() {
    const file = readFile('src/public/studentsSampleData.xlsx')

    let data: StudentEntity[] = []

    const sheets = file.SheetNames

    for (let i = -1; i < sheets.length; i++) { 
      const temp = utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
      temp.forEach((res: StudentEntity) => {
        data.push(res)
      })
    }

    // adding readed xl data to db
    this.studentRepository.clear();
    this.studentRepository.save(data);
    this.socket.emit("jobStatus",{status:"success"})



  }
}
