import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    id_cliente:number;
    senha:string;
    nome:string;
    telefone:number;
    email:string;
    statusConta:boolean;
}
