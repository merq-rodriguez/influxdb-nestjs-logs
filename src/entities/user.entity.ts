import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { Task } from "./task.entity";
import * as bcrypt from 'bcrypt';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  username: string;
  
  @Column()
  password: string;
  
  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(type => Role)
  @JoinColumn({name: 'idRole'})
  role: Role;

  @OneToMany(type => Task, t => t.user)
  tasks: Task[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}