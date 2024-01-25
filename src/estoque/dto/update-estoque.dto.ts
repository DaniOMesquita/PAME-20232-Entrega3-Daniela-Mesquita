import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
    id_estoque:number;
    id_produto:number;
    id_unidade:number;
    quantProduto:number;
}
