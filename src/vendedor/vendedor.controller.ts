import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';
import { Param, Body } from '@nestjs/common';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

// Cria um novo vendedor
// URL: POST /vendedor
  @Post()
  create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }
// Retorna todos os vendedores
// URL: GET /vendedor
  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }
// Retorna um vendedor pelo id
// URL: GET /vendedor/:id
  @Get(':id')
    findOne(@Param('id') id_vendedor: string) {
      return this.vendedorService.findOne(+id);
    }
  // Atualiza um vendedor pelo id
  // URL: PATCH /vendedor/:id
    @Patch(':id')
    update(@Param('id') id_vendedor: string, @Body() updateVendedorDto: UpdateVendedorDto) {
      return this.vendedorService.update(+id, updateVendedorDto);
    }
  // Remove um vendedor pelo id
  // URL: DELETE /vendedor/:id
    @Delete(':id')
    remove(@Param('id') id_vendedor: string) {
      return this.vendedorService.remove(+id);
    }
}
