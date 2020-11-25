import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GenComp';

  constructor(private router: Router) { }
  exibindoMenu() {
    console.log(this.router.url)
    return this.router.url !== '/login' 
              && this.router.url !== '/'
              && this.router.url !== '/cadastro'
              && this.router.url !== '/contrato'
              && this.router.url !== '/menu-cli'
              && this.router.url !== '/menu-fun'
              && this.router.url !== '/home-fun'
              && this.router.url !== '/historico-fun'
              && this.router.url !== '/solicitacoes-fun'
              && this.router.url !== '/perfil-fun'
              && this.router.url !== '/cadastro-sala'
              && this.router.url !== '/cadastro-equipamento'
              && this.router.url !== '/cadastro-servico'
              && this.router.url !== '/cadastro-funcionario'

  }
  exibindoMenuFun() {
    console.log(this.router.url)
    return this.router.url !== '/login'
              && this.router.url !== '/' 
              && this.router.url !== '/cadastro'
              && this.router.url !== '/contrato'
              && this.router.url !== '/menu-fun'
              && this.router.url !== '/menu-cli'
              && this.router.url !== '/historico-cli'
              && this.router.url !== '/home-cli'
              && this.router.url !== '/solicitacoes-cli'
              && this.router.url !== '/perfil-cli'

  }
}


