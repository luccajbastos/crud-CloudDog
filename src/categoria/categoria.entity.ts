import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nome: string;

  @Column({ default: 1 })
  ordenacao: number;

  @CreateDateColumn()
  data_criacao: Date;

  @Column()
  descricao: string;
}

export default categoria;
