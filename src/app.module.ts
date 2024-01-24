import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendedorModule } from './vendedor/vendedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CupomModule } from './cupom/cupom.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { PedidoModule } from './pedido/pedido.module';
import { UnidadeModule } from './unidade/unidade.module';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [VendedorModule, ClienteModule, ProdutoModule, CategoriaModule, CupomModule, CarrinhoModule, PedidoModule, UnidadeModule, EstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
