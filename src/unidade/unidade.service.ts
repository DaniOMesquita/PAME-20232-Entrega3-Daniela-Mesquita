import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Injectable()
export class UnidadeService {
  create(createUnidadeDto: CreateUnidadeDto) {
    return 'This action adds a new unidade';
  }

  findAll() {
    return `This action returns all unidade`;
  }

  findOne(id_unidade: number) {
    return `This action returns a #${id} unidade`;
  }

  update(id_unidade: number, updateUnidadeDto: UpdateUnidadeDto) {
    return `This action updates a #${id} unidade`;
  }

  remove(id_unidade: number) {
    return `This action removes a #${id} unidade`;
  }
}
