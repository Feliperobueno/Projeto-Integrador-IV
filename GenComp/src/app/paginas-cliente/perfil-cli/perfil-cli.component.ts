import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-cli',
  templateUrl: './perfil-cli.component.html',
  styleUrls: ['./perfil-cli.component.scss']
})
export class PerfilCliComponent implements OnInit {
  
  nome;

  cpf_cnpj;

  usuario;

  email;

  telefone;


  password;

  confirmPassword;

  constructor() { }

  ngOnInit(): void {
  }

}
