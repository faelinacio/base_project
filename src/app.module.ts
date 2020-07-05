import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {dbOptions} from './auth/constants';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbOptions),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
