import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    id_produto:number;
    id_categoria:number;
    nome:string;
    emEstoque:boolean;
}
