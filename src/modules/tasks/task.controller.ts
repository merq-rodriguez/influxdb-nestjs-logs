import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { NewTaskDTO } from "./task.dto";


@Controller('tasks')
export class TaskController{
  constructor(private readonly taskService: TaskService){}

  @Get()
  getTasks(){
    return this.taskService.findAll()
  }

  @Post()
  addTask(@Body() data: NewTaskDTO){
    return this.taskService.addTask(data)
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number){
    return this.taskService.removeTask(id)
  }
}