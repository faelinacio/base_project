import * as dotenv from 'dotenv';
import {TypeOrmModuleOptions} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

dotenv.config({path: `environments/${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`});

export const jwtConstants = {
  secret: process.env.SECRET,
  expirationTime: process.env.EXPIRATION_TIME,
  salt: process.env.SALT,
};

export const jwtOptions = {
  secret: process.env.SECRET,
  signOptions: { expiresIn: process.env.EXPIRATION_TIME },
}

export const dbOptions: TypeOrmModuleOptions = {
  type: process.env.TYPE as any,
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  autoLoadEntities: process.env.AUTO_LOAD_ENTITIES === 'true',
  synchronize: process.env.AUTO_LOAD_ENTITIES === 'true',
}
