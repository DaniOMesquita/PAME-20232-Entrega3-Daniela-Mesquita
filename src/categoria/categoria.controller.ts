import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}
  // Cria uma nova categoria
  // URL: POST /categoria
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }
  // Retorna todas as categorias
  // URL: GET /categoria
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }
// Retorna uma categoria pelo id
// URL: GET /categoria/:id
  @Get(':id')
  findOne(@Param('id') id_categoria string) {
    return this.categoriaService.findOne(+id);
  }
// Atualiza uma categoria pelo id
// URL: PATCH /categoria/:id
  @Patch(':id')
  update(@Param('id') id_categoria: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }
// Remove uma categoria pelo id
// URL: DELETE /categoria/:id
  @Delete(':id')
  remove(@Param('id') id_categoria string) {
    return this.categoriaService.remove(+id);
  }
}
