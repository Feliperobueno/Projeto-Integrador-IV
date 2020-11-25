import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService]
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

  
  lista: Pessoa[] = [];
  listaPerfil: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  perfil: string;
  mens = '';

 
  constructor(private router: Router, private api: PessoaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then
    (res =>{
      this.lista = res;
    });
  }

  consultarPorPerfil(){
    this.api.consultarPorPerfil(this.perfil)
    .toPromise()
    .then
    (res =>{
      this.listaPerfil = res;
    });
  }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(pessoa => {
      this.mens = pessoa.nome + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
    this.login();

  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(pessoa => {
      this.mens = "Pessoa excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(pessoa => {
      this.mens = pessoa.nome + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p: Pessoa){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new Pessoa;

  }


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


}
