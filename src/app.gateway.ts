import { StudentService } from './students/student.service';
import { Server } from 'socket.io';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AppService } from './app.service';

@WebSocketGateway(4000)
export class AppGateway implements OnGatewayInit {

  constructor(private studentService : StudentService){}
 
  @WebSocketServer()
  server: Server;


  afterInit(server: any) {
    this.studentService.socket = server;
  }

  // @SubscribeMessage('buddhika')
  // handleMessage(client: any, payload: any): void {
  //   const data = this.studentService.sendData()
  //  client.emit("buddhika",data)
  // }



}
