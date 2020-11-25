import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-fun',
  templateUrl: './menu-fun.component.html',
  styleUrls: ['./menu-fun.component.scss']
})
export class MenuFunComponent implements OnInit {

  nomeUsuario = 'Felipe';

  titulo = 'GenComp';


  constructor(private router: Router) { }

  sair(){
    this.router.navigate(['/login'])
  }


  ngOnInit(): void {
  }

}
