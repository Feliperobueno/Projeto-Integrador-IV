import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-fun',
  templateUrl: './menu-fun.component.html',
  styleUrls: ['./menu-fun.component.scss']
})
export class MenuFunComponent implements OnInit {

  
  nomeUsuario = 'Felipe';

  titulo = 'GenComp';


  constructor() { }

  ngOnInit(): void {
  }

}
