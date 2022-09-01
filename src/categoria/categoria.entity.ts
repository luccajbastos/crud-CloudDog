import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class categoria {
  @PrimaryGeneratedColumn('increment')
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
