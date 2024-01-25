import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';

@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}
  // Cria um novo cupom
  // URL: POST /cupom
  @Post()
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }
// Retorna todos os cupons
// URL: GET /cupom
  @Get()
  findAll() {
    return this.cupomService.findAll();
  }
// Retorna um cupom pelo id
// URL: GET /cupom/:id
  @Get(':id')
  findOne(@Param('id') id_cupom: string) {
    return this.cupomService.findOne(+id);
  }
// Atualiza um cupom pelo id
// URL: PATCH /cupom/:id
  @Patch(':id')
  update(@Param('id') id_cupom: string, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }
// Remove um cupom pelo id
// URL: DELETE /cupom/:id
  @Delete(':id')
  remove(@Param('id') id_cupom: string) {
    return this.cupomService.remove(+id);
  }
}
