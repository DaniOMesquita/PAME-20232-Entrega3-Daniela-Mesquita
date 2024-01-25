export class CreatePedidoDto {
    id_pedido:number;
    id_carrinho:number;
    statusPagamento:boolean;
    metodoPagamento:string;
    data: Date;
}
