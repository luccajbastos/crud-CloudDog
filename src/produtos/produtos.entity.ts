import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  preco: number;

  @Column()
  id_categoria: number;

  @Column()
  descricao: string;
}

export default Produtos;
