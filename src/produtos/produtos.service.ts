import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Produtos from './produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepository: Repository<Produtos>,
  ) {}

  getAll() {
    return this.produtosRepository.find();
  }

  saveProduct(product: any) {
    const productEntity = this.produtosRepository.create(product);
    return this.produtosRepository.save(productEntity);
  }

  async getProductById(id: number) {
    const product = await this.produtosRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return product;
  }

  async getProductByName(name: string) {
    const product = await this.produtosRepository.findOne({
      where: { titulo: name },
    });
    if (!product) {
      throw new NotFoundException('Produto não encontado.');
    }
    return product;
  }

  update(id: string, name: any) {
    return this.produtosRepository.update(id, name);
  }

  delete(id: string) {
    return this.produtosRepository.delete(id);
  }
}
