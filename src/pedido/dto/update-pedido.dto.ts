import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    id_pedido:number;
    id_carrinho:number;
    statusPagamento:boolean;
    metodoPagamento:string;
    data: Date;
}
