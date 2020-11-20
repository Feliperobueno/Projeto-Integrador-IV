import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario;

  cpf_cnpj;

  email;

  telefone;

  nome;

  erroUser = 'Precisa ter ao menos 4 caracteres';

  password;
  confirmPassword;

  erroSenhaDiferente;

  cadastroSuccess() {
    this.router.navigate(['/contrato']);
  }

  login(){
    this.router.navigate(['/login']);
  }


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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
