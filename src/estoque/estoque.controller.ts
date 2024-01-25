import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}
// Cria um novo estoque
// URL: POST /estoque
  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }
// Retorna todos os estoques
// URL: GET /estoque
  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }
// Retorna um estoque pelo id
// URL: GET /estoque/:id
  @Get(':id')
  findOne(@Param('id') id_estoque: string) {
    return this.estoqueService.findOne(+id);
  }
// Atualiza um estoque pelo id
// URL: PATCH /estoque/:id
  @Patch(':id')
  update(@Param('id') id_estoque: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }
//  Remove um estoque pelo id
// URL: DELETE /estoque/:id
  @Delete(':id')
  remove(@Param('id') id_estoque: string) {
    return this.estoqueService.remove(+id);
  }
}
