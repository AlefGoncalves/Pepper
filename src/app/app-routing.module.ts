import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./tabs/carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./tabs/pedidos/pedidos.module').then(m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./tabs/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./tabs/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'meus_dados',
    loadChildren: () => import('./perfil-pages/meus-dados/meus-dados.module').then(m => m.MeusDadosPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./perfil-pages/ajuda/ajuda.module').then(m => m.AjudaPageModule)
  },
  {
    path: 'notifica',
    loadChildren: () => import('./perfil-pages/notifica/notifica.module').then(m => m.NotificaPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./perfil-pages/config/config.module').then(m => m.ConfigPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./perfil-pages/seguranca/seguranca.module').then(m => m.SegurancaPageModule)
  },
  {
    path: 'eletrica',
    loadChildren: () => import('./categorias/eletrica/eletrica.module').then(m => m.EletricaPageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./detalhes/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'detalhesCarrinho/:id',
    loadChildren: () => import('./detalhes/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
