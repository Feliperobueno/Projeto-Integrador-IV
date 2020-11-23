import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/models/historico.model';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-historico-fun',
  templateUrl: './historico-fun.component.html',
  styleUrls: ['./historico-fun.component.scss']
})
export class HistoricoFunComponent implements OnInit {

  OptionStatus: string[] = ['Aceito', 'Analisando', 'Em espera', 'Finalizado'];

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
