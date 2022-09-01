import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import categoria from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(categoria)
    private categoriaRepository: Repository<categoria>,
  ) {}

  getAll() {
    return this.categoriaRepository.find();
  }

  saveCategoria(categoria: any) {
    const categoriaEntity = this.categoriaRepository.create(categoria);
    return this.categoriaRepository.save(categoriaEntity);
  }

  async getCategoriaById(id: number) {
    const categoria = await this.categoriaRepository.findOne({
      where: { id_categoria: id },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }

  async getCategoriaByName(name: string) {
    const categoria = await this.categoriaRepository.findOne({
      where: { nome: name },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }

  update(id: string, name: any) {
    return this.categoriaRepository.update(id, name);
  }

  delete(id: string) {
    return this.categoriaRepository.delete(id);
  }
}
