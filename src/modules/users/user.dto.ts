import {IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class NewUserDTO{
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  role: number;
}

export class UpdateUserDTO{
  @IsInt()
  idUser: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password: string;

  @IsInt()
  @IsOptional()
  role: number;
}