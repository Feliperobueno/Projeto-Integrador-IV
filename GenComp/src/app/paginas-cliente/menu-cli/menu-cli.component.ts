import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cli',
  templateUrl: './menu-cli.component.html',
  styleUrls: ['./menu-cli.component.scss']
})
export class MenuCliComponent implements OnInit {

  nomeUsuario = 'Felipe';

  titulo = 'GenComp';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair(){

    this.router.navigate(['/login'])

  }

}
