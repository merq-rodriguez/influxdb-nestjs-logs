import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewTaskDTO } from './task.dto';
import { Task, User } from '../../entities';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async addTask(data: NewTaskDTO): Promise<Task> {
    let task =  new Task();
    task.name = data.name;
    task.duration = data.duration;
    task.user = new User()
    task.user.idUser = data.idUser;
    return await this.taskRepository.save(task)
  }

  async removeTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}