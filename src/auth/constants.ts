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
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === 'true',
  synchronize: process.env.DB_AUTO_LOAD_ENTITIES === 'true',
}
