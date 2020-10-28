import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role{
  @PrimaryGeneratedColumn()
  idRole: number;

  @Column()
  name: string
}