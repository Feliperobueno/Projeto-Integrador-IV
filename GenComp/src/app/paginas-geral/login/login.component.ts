import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario.model';
import { Pessoa } from 'src/app/models/pessoa.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario;

  senha;

  erroUser = 'Precisa ter ao menos 4 caracteres';

  obj:LoginUsuario = new LoginUsuario(); 
  mens = '';
  objPessoa:Pessoa = new Pessoa();


  Cadastro() {
    this.router.navigate(['/cadastro']);
  }

  loginSuccess() {
    this.router.navigate(['/contrato']);
  }

  constructor(private router: Router, private api: LoginService) { }

  ngOnInit(): void {
    this.adicionar();
  }

  adicionar(){
    this.obj.login="bcnetbr2";
    this.obj.senha="1234567";
    this.api.adicionar(this.obj)
    .toPromise()
    .then(pessoa => {
      this.mens =  " foi adicionado(a) com sucesso!";
      console.log(pessoa);
      
    });
    

  }






}
