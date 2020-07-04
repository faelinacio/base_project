import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserService} from '../user/user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '../user/user.entity';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local.strategy';
import {AuthController} from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import {jwtOptons} from './constants';
import {JwtStrategy} from './jwt.strategy';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register(jwtOptons),
  ],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
