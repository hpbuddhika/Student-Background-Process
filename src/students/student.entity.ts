import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique('uniqueFirstNameandLastname', ['email'])
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column() 
  name: string;

  @Column()
  email: string; 

  @Column()
  age: number;

  @Column()
  dataofBirth:Date;
}