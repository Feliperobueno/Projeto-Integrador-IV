import { OrdemServico } from './../../models/ordem-servico.model';
import { HistoricoService } from './../../services/historico.service';
import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/models/historico.model';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';

@Component({
  selector: 'app-historico-cli',
  templateUrl: './historico-cli.component.html',
  styleUrls: ['./historico-cli.component.scss']
})
export class HistoricoCliComponent implements OnInit {

  lista: Historico[] = [];
  obj: Historico = new Historico();
  mens = '';
  listaOsCliente: OrdemServico[] = [];


  constructor(private api:HistoricoService, private api2:OrdemServicoService) { }

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

  consultarOsCliente(){
    this.api2.consultarOsPorCli(2)
    .toPromise()
    .then
    (res =>{
      this.listaOsCliente = res;
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
