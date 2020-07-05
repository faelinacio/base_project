import {Test, TestingModule} from '@nestjs/testing';
import {AuthService} from './auth.service';
import {UserService} from '../user/user.service';
import {JwtModule} from '@nestjs/jwt';
import {getRepositoryToken} from '@nestjs/typeorm';
import {User} from '../user/user.entity';

describe('AuthService', () => {
  let authService: AuthService;
  let user;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({})
      ],
      providers: [
        AuthService,
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });
});
