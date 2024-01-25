import { Injectable } from '@nestjs/common';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  create(createVendedorDto: CreateVendedorDto) {
    return 'This action adds a new vendedor';
  }
  findOne(id_vendedor: number) {
    return `This action returns a #${id} vendedor`;
  }
 ''
  update(id_vendedor: number, updateVendedorDto: UpdateVendedorDto) {
    return `This action updates a #${id} vendedor`;
  }

  remove(id_vendedor: number) {
    return `This action removes a #${id} vendedor`;
  }
}
