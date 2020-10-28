import {IsIn, IsInt, IsNotEmpty, IsString} from 'class-validator';

export class NewTaskDTO{
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsInt()
  duration: number;
  
  @IsInt()
  idUser: number;
}
