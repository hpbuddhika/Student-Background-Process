import { BullModule } from '@nestjs/bull/dist/bull.module';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './students/student.module';
import { AppGateway } from './app.gateway';
import { StudentService } from './students/student.service';
import { Repository } from 'typeorm';

@Module({ 
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,  
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password123',
      database: 'studentDB', 
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true, 
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
  exports:[AppService,AppGateway]
})
export class AppModule {}
