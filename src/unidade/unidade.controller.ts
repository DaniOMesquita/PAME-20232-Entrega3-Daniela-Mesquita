import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}
// Cria uma nova unidade
// URL: POST /unidade
  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadeService.create(createUnidadeDto);
  }
// Retorna todas as unidades
// URL: GET /unidade
  @Get()
  findAll() {
    return this.unidadeService.findAll();
  }
// Retorna uma unidade pelo id
// URL: GET /unidade/:id
  @Get(':id')
  findOne(@Param('id') id_unidade: string) {
    return this.unidadeService.findOne(+id);
  }
// Atualiza uma unidade pelo id
// URL: PATCH /unidade/:id
  @Patch(':id')
  update(@Param('id') id_unidade: string, @Body() updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadeService.update(+id, updateUnidadeDto);
  }
// Remove uma unidade pelo id
// URL: DELETE /unidade/:id
  @Delete(':id')
  remove(@Param('id') id_unidade: string) {
    return this.unidadeService.remove(+id);
  }
}
