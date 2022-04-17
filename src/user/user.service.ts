import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import * as bcrypt from 'bcrypt';
import {jwtConstants} from '../auth/constants';
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {
    }

    async create(user: User): Promise<User> {
        const isEmailAlreadUsed = await this.usersRepository.find({where: {email: user.email}});

        user.password = await bcrypt.hash(user.password, parseInt(jwtConstants.salt));

        if (isEmailAlreadUsed && isEmailAlreadUsed.length > 0) {
            throw new BadRequestException("Email already used")
        }

        return this.usersRepository.save(user);
    }

    async findAll(pageSize = 10, pageNumber = 1): Promise<{ total: number; users: User[] }> {
        const [users, total] = await this.usersRepository.findAndCount({
            select: ["id", "email", "name"],
            take: pageSize,
            skip: (pageNumber - 1) * pageSize
        });
        return {users, total}
    }

    findOneById(id: number): Promise<User> {
        return this.usersRepository.findOneOrFail({where: {id: id}});
    }

    findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({where: {email}});
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
