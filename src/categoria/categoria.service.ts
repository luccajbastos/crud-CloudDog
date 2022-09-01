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

  saveProduct(product: any) {
    const productEntity = this.categoriaRepository.create(product);
    return this.categoriaRepository.save(productEntity);
  }

  async getProductById(id: number) {
    const product = await this.categoriaRepository.findOne({
      where: { id_categoria: id },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return product;
  }

  update(id: string, name: any) {
    return this.categoriaRepository.update(id, name);
  }

  delete(id: string) {
    return this.categoriaRepository.delete(id);
  }
}
