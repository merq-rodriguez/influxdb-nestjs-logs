import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from '../../entities';
import { NewUserDTO, UpdateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  
  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({where: {username}});
  }
  
  async createUser(user: NewUserDTO): Promise<User> {
    let newUser =  new User();
    newUser.username = user.username;
    newUser.password = user.password;
    newUser.role = new Role()
    newUser.role.idRole = user.role;
    return await this.usersRepository.save(newUser)
  }

  async updateUser(data: UpdateUserDTO): Promise<User> {
    let user = await this.findOne(data.idUser);
    if(!user)
      throw new NotFoundException('User not exists');

    if(data.role)
      user.role.idRole = data.role;
      
    user.username = data.username;
    user.password = data.password;
    return await this.usersRepository.save(user)
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}