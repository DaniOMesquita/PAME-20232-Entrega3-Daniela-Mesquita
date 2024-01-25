import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}
// Cria um novo pedido
// URL: POST /pedido
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }
//  Retorna todos os pedidos
// URL: GET /pedido
  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }
// Retorna um pedido pelo id
// URL: GET /pedido/:id
  @Get(':id')
  findOne(@Param('id') id_pedido: string) {
    return this.pedidoService.findOne(+id);
  }
// Atualiza um pedido pelo id
// URL: PATCH /pedido/:id
  @Patch(':id')
  update(@Param('id') id_pedido: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }
// Remove um pedido pelo id
// URL: DELETE /pedido/:id
  @Delete(':id')
  remove(@Param('id') id_pedido: string) {
    return this.pedidoService.remove(+id);
  }
}
