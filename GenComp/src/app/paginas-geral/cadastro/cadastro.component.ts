import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario="";

  email = "";

  telefone = "";

  nome = "";

  erroUser = "Precisa ter ao menos 4 caracteres";

  password = "";
  confirm_password = "";

  erroSenhaDiferente = "";


  verificarSenha(){
    if (this.password === this.confirm_password) {
         this.erroSenhaDiferente ='As senhas conferem';
     } 
     else {
        this.erroSenhaDiferente='As senhas não conferem';
     }
   }
      

  constructor() { }

  ngOnInit(): void {
  }

}
