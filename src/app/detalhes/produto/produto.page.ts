import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  qtde = 1;
  id: string;
  produto: Produtos;
  pedido: Pedidos;
  nome: string;
  descricao: string;
  preco: string;
  total: number;
  strTotal: string;

  obj: Object[] = []



  @Input() url: string

  constructor(public nav: NavController, private route: Router, private activatedRoute: ActivatedRoute, private produtoService: ProdutosService, private pedidosService: PedidosService, public toastController: ToastController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    try {
      this.produtoService.getProduto(this.id).subscribe(prod => {
        this.produto = prod;
        this.nome = this.produto.nome
        this.descricao = this.produto.descricao
        this.preco = this.produto.preco
        this.url = this.produto.urlImg

        this.total = (Number.parseFloat(this.preco))
        this.strTotal = this.total.toFixed(2)

        console.log(prod)
      })
    } catch (e) {
      console.log(e)
    }

  }

  voltarInicio() {
    this.route.navigateByUrl('home');
    this.route.dispose
  }

  adiciona() {
    this.qtde++
    this.total = Number.parseFloat(this.preco) * this.qtde
    this.strTotal = this.total.toFixed(2)

  }
  subtrai() {
    if (this.qtde > 0) {
      this.qtde--
      this.total = (Number.parseFloat(this.preco) * this.qtde)
      this.strTotal = this.total.toFixed(2)
    }
  }

  addCarrinho(){

    this.pedido = new Pedidos

    console.log("ID do produto: " + this.id)
    this.pedido.qtde = this.qtde.toString()
    this.pedido.valorTotal = this.strTotal
    this.pedido.status = false

    console.log('PEDIDOS: ')
    console.log(this.pedido)

    this.pedidosService.create(this.pedido).subscribe(pedido => {
      console.log(pedido)
    })
  }

  addCarrinhoPedido(){
    this.pedido = new Pedidos

    this.pedido.qtde = this.qtde.toString()
    this.pedido.valorTotal = this.strTotal
    this.pedido.status = false

    this.pedido.produtos = this.produto



    this.pedidosService.create(this.pedido).subscribe(pedido => {
      console.log(pedido)
    })

    this.route.navigateByUrl('home')
    this.route.dispose

    this.presentToast('Produto adicionado ao carrinho com sucesso', 'success', 1300);
  }

  async presentToast(texto: string, cor: string, duration: number) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: duration
    });
    toast.present();
  }

}
