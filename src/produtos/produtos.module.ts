import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './produtos.controller';
import Produtos from './produtos.entity';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
