import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  produtos: Produtos[];
  //procura: string;
  public selectTab: string = '0';
  produtosFiltrado: Produtos[];

  constructor(public nav: NavController, private service: ProdutosService, private route: Router) { }


  ngOnInit() {
    try {
      this.service.read().subscribe(prod => {
        this.produtos = prod;
      })
    }catch{

    }
  }
  doRefresh(event) {

    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 1000);

  }

  segmentChanged(event: any){
    this.selectTab = event.target.value;
    console.log(this.produtos)
  }


  exibirDetalhes(id: String){
    this.route.navigate(['produto', id]);
    this.route.dispose
  }

}
