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
  saveCategoria(@Body() product) {
    return this.CategoriaService.saveCategoria(product);
  }

  @Get(':id')
  getCategoria(@Param('id') id: number) {
    if (id) {
      return this.CategoriaService.getCategoriaById(Number(id));
    }
    return this.CategoriaService.getAll();
  }

  @Get()
  getCategoriaByName(@Query('name') name: string) {
    if (name) {
      return this.CategoriaService.getCategoriaByName(name);
    }
    return this.CategoriaService.getAll();
  }

  @Put(':id')
  updateCategoria(@Param('id') id: string, @Body() name: any) {
    return this.CategoriaService.update(id, name);
  }

  @Delete(':id')
  deleteCategoria(@Param('id') id: string) {
    return this.CategoriaService.delete(id);
  }
}
