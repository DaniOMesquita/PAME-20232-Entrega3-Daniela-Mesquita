import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  // Cria um novo carrinho
  // URL: POST /carrinho

  @Post()
  create(@Body() createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoService.create(createCarrinhoDto);
  }

  // Retorna todos os carrinhos
  // URL: GET /carrinho

  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

// Retorna um carrinho pelo id
// URL: GET /carrinho/:id

  @Get(':id')
  findOne(@Param('id') id_carrinho: string) {
    return this.carrinhoService.findOne(+id);
  }

  // Atualiza um carrinho pelo id
  // URL: PATCH /carrinho/:id

  @Patch(':id')
  update(@Param('id') id_carrinho: string, @Body() updateCarrinhoDto: UpdateCarrinhoDto) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  // Remove um carrinho pelo id
  // URL: DELETE /carrinho/:id

  @Delete(':id')
  remove(@Param('id') id_carrinho: string) {
    return this.carrinhoService.remove(+id);
  }
}
