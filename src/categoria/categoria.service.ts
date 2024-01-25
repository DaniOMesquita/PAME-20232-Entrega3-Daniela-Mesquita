import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  create(createCategoriaDto: CreateCategoriaDto) {
    return 'This action adds a new categoria';
  }

  findAll() {
    return `This action returns all categoria`;
  }

  findOne(id_categoria: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id_categoria: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id_categoria: number) {
    return `This action removes a #${id} categoria`;
  }
}
