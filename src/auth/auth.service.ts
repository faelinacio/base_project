import { Injectable } from '@nestjs/common';
import {UserService} from '../user/user.service';
import {JwtService} from '@nestjs/jwt';
import {User} from '../user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(username);

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
