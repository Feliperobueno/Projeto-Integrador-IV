import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {

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
