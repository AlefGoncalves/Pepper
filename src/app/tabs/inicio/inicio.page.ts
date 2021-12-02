import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  produtos = [
    {
      nome: '4x Cheddar',
      descricao: '+ 2 refri lata 269 ml',
      url: 'assets/hamburguer/4xcheddar.jpg',
      preco: 48.89
    },
    {
      nome: '4x Chicken',
      descricao:'+2 batatas +refri 1,5L',
      url: 'assets/hamburguer/4xchicken.jpg',
      preco: 58.99
    },
    {
      nome: '4x Double Cheddar',
      descricao: '+ 2 refri lata 269 ml',
      url: 'assets/hamburguer/4xdoublecheddar.jpg',
      preco: 56.00
    },
    {
      nome: '5 Big (Combo 1)',
      descricao: '+ 1 refri 1,5L',
      url: 'assets/hamburguer/5big.jpg',
      preco: 62.99
    },
    {
      nome: '5 Big (Combo 2)',
      descricao: '+3 batatas + 1 refri 1,5L',
      url: 'assets/hamburguer/5bigc2.jpg',
      preco: 75.99
    },
    {
      nome: 'Guaraná',
      descricao: '1 Litro',      
      url: 'assets/hamburguer/guarana15l.jpg',
      preco: 9.00
    },
    {
      nome: 'Água',
      descricao: '500 ml',      
      url: 'assets/hamburguer/agua500ml.jpg',
      preco: 9.00
    },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
