import { PartialType } from '@nestjs/mapped-types';
import { CreateCarrinhoDto } from './create-carrinho.dto';

export class UpdateCarrinhoDto extends PartialType(CreateCarrinhoDto) {
    id_carrinho:number;
    id_cliente:number;
    id_produto:number;
    id_cupom:number;
    valorFrete:number;
    valorTotal:number;
}
