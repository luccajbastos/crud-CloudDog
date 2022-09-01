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
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private CategoriaService: CategoriaService) {}

  @Post()
  saveProduct(@Body() product) {
    return this.CategoriaService.saveProduct(product);
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.CategoriaService.getProductById(Number(id));
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() name: any) {
    return this.CategoriaService.update(id, name);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.CategoriaService.delete(id);
  }
}
