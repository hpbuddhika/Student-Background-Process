import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
// import {readFile} from 'fs'
import { readFile, utils } from 'xlsx'


@Injectable()
export class NotifierService {

    readFile() {

        const file = readFile('src/public/test2.xls')

        let data = []

        const sheets = file.SheetNames

        for (let i = 0; i < sheets.length; i++) {
            const temp = utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }

        // Printing data 
        console.log(data)

    }

    test() {
        console.log("hi_______________________")
    }



}
