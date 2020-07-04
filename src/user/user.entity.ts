import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {nullable: true, unique: true})
  email: string;

  @Column('varchar',{nullable: true})
  name: string;

  @Column('varchar',{nullable: true})
  password: string;
}
