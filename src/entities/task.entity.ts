import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Task{
  @PrimaryGeneratedColumn()
  idTask: number;

  @Column()
  name: string;

  @Column()
  duration: number;

  @ManyToOne(type => User, u => u.tasks)
  @JoinColumn({name: 'idUser'})
  user: User
}