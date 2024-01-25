import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
// Cria um novo produto
// URL: POST /produto
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }
// Retorna todos os produtos
// URL: GET /produto
  @Get()
  findAll() {
    return this.produtoService.findAll();
  }
// Retorna um produto pelo id
// URL: GET /produto/:id
  @Get(':id')
  findOne(@Param('id') id_produto: string) {
    return this.produtoService.findOne(+id);
  }
// Atualiza um produto pelo id
// URL: PATCH /produto/:id
  @Patch(':id')
  update(@Param('id') id_produto: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }
// Remove um produto pelo id
// URL: DELETE /produto/:id
  @Delete(':id')
  remove(@Param('id') id_produto: string) {
    return this.produtoService.remove(+id);
  }
}
