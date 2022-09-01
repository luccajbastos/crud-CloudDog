import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private ProdutosService: ProdutosService) {}

  @Post()
  saveProduct(@Body() product) {
    return this.ProdutosService.saveProduct(product);
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.ProdutosService.getProductById(Number(id));
  }

  @Get()
  getProductByName(@Query('name') name: string) {
    if (name) {
      return this.ProdutosService.getProductByName(name);
    }
    return this.ProdutosService.getAll();
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() name: any) {
    return this.ProdutosService.update(id, name);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.ProdutosService.delete(id);
  }
}
