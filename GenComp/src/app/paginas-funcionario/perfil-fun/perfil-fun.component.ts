import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-perfil-fun',
  templateUrl: './perfil-fun.component.html',
  styleUrls: ['./perfil-fun.component.scss']
})
export class PerfilFunComponent implements OnInit {

  funcoes = ['Instalador', 'Server', 'DBA', 'Montador', 'Geral'];

  nome;

  cpf_cnpj;

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

  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  objPessoaSel: Pessoa = new Pessoa();
  mens = '';

  constructor(private api: PessoaService) { }

  ngOnInit(): void {
    this.consultar();
    this.consultarClienteid()
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then
    (res =>{
      this.lista = res;
    });
  }

  consultarClienteid(){
    this.api.consultarPorId(1)
    .toPromise()
    .then
    (res =>{
      this.objPessoaSel = res;
    });
  }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(pessoa => {
      this.mens = pessoa.nome + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
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
    this.api.alterar(this.objPessoaSel.id,this.objPessoaSel)
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

}


