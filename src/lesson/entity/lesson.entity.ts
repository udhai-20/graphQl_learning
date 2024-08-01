import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson{
@ObjectIdColumn()
_id:string;  

@PrimaryGeneratedColumn() 
id:string;

@Column()
name:string;

@Column()
startDate:string;

@Column()
endDate:string;
}