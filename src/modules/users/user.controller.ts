import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { NewUserDTO } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{
  constructor(private readonly userService: UserService){}

  @Get()
  getUsers(){
    return this.userService.findAll()
  }

  @Post()
  addUser(@Body() user: NewUserDTO){
    return this.userService.createUser(user)
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number){
    return this.userService.deleteUser(id)
  }
}