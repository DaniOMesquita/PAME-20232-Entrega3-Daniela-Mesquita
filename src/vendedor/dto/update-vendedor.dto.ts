import { PartialType } from '@nestjs/mapped-types';
import { CreateVendedorDto } from './create-vendedor.dto';

export class UpdateVendedorDto extends PartialType(CreateVendedorDto) {
    id_vendedor:number;
    senha:number;
    nome:string;
    telefone:number;
    email:string;
}
