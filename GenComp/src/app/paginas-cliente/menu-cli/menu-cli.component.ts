import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cli',
  templateUrl: './menu-cli.component.html',
  styleUrls: ['./menu-cli.component.scss']
})
export class MenuCliComponent implements OnInit {

  nomeUsuario = 'Felipe';

  titulo = 'GenComp';


  constructor() { }

  ngOnInit(): void {
  }

}
