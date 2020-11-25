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
              && this.router.url !== '/menu-cli';

  }
  exibindoMenuFun() {
    console.log(this.router.url)
    return this.router.url !== '/login'
              && this.router.url !== '/' 
              && this.router.url !== '/cadastro'
              && this.router.url !== '/contrato'
              && this.router.url !== '/menu-fun';

  }
}


