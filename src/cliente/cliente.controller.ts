import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}
// Cria um novo cliente
// URL: POST /cliente
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }
// Retorna todos os clientes
// URL: GET /cliente
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }
// Retorna um cliente pelo id
// URL: GET /cliente/:id
  @Get(':id')
  findOne(@Param('id') id_cliente: string) {
    return this.clienteService.findOne(+id);
  }
// Atualiza um cliente pelo id
// URL: PATCH /cliente/:id
  @Patch(':id')
  update(@Param('id') id_cliente: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }
// Remove um cliente pelo id
// URL: DELETE /cliente/:id
  @Delete(':id')
  remove(@Param('id') id_cliente: string) {
    return this.clienteService.remove(+id);
  }
}
