import { EquipamentoService } from './../../services/equipamento.service';
import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/models/equipamento.model';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.scss']
})
export class CadastroEquipamentoComponent implements OnInit {

  equipamento: any;

  obj: Equipamento = new Equipamento();
  lista: Equipamento[] = [];
  mens = '';

  constructor(private api: EquipamentoService) { }

  ngOnInit(): void {
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
    .then(Equipamento => {
      this.mens = Equipamento.nome + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(Equipamento => {
      this.mens = "Sala excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(Equipamento => {
      this.mens = Equipamento.nome + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p:Equipamento){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new Equipamento;

  }

}
