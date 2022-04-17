
import {Body, Controller, Delete, Get, Param, Post, Query, UseGuards} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() { pageSize, pageNumber }) {
    return this.userService.findAll(pageSize, pageNumber);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
