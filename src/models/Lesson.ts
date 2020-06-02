import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lesson')
export default class Lesson {

  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column({
    length: 255,
  })
  description: string;

  @Column()
  duration: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updatedAt: Date;
}
