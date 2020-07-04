
import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
