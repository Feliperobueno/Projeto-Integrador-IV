import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario;

  senha;

  erroUser = 'Precisa ter ao menos 4 caracteres';

  constructor() { }

  ngOnInit(): void {
  }

}
