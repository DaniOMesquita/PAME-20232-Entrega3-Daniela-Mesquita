import { PartialType } from '@nestjs/mapped-types';
import { CreateCupomDto } from './create-cupom.dto';

export class UpdateCupomDto extends PartialType(CreateCupomDto) {
    id_cupom:number;
    id_categoria:number;
    nome:string;
    inicioValidade:Date;
    finalValidade:Date;
}
