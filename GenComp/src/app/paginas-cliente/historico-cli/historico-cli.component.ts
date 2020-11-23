import { HistoricoService } from './../../services/historico.service';
import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/models/historico.model';

@Component({
  selector: 'app-historico-cli',
  templateUrl: './historico-cli.component.html',
  styleUrls: ['./historico-cli.component.scss']
})
export class HistoricoCliComponent implements OnInit {

  lista: Historico[] = [];
  obj: Historico = new Historico();
  mens = '';


  constructor(private api:HistoricoService) { }

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

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(historico => {
      this.mens = "A registro id " + historico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(historico => {
      this.mens = "O registro foi excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(historico => {
      this.mens = "O registro id " + historico.id + + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p: Historico){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new Historico;

  }

}
