import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-fun',
  templateUrl: './perfil-fun.component.html',
  styleUrls: ['./perfil-fun.component.scss']
})
export class PerfilFunComponent implements OnInit {

  funcoes = ['Instalador', 'Server', 'DBA', 'Montador', 'Geral'];

  nome;

  usuario;

  email;

  telefone;

  erroUser = 'Precisa ter ao menos 4 caracteres';

  password;

  confirmPassword;

  erroSenhaDiferente;

  funcaoFun;

  verificarSenha(): void{
    if
    (this.password === this.confirmPassword)
    {
      this.erroSenhaDiferente = 'As senhas conferem';
    }
    else
    {
      this.erroSenhaDiferente = 'As senhas não conferem';
    }
    console.log(this.erroSenhaDiferente);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
