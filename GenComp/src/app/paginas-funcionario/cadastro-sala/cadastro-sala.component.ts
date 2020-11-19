import { Component, OnInit } from '@angular/core';
import { LaboratorioSala } from 'src/app/models/laboratorio-sala.model';
import { LaboratorioSalaService } from 'src/app/services/laboratorio-sala.service';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.component.html',
  styleUrls: ['./cadastro-sala.component.scss']
})
export class CadastroSalaComponent implements OnInit {

  sala: string;
  obj: LaboratorioSala = new LaboratorioSala();
  lista: LaboratorioSala[] = [];
  mens = '';

  constructor(private api: LaboratorioSalaService) { }

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
    .then(LaboratorioSala => {
      this.mens = LaboratorioSala.nome + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(LaboratorioSala => {
      this.mens = "Sala excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(LaboratorioSala => {
      this.mens = LaboratorioSala.nome + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p:LaboratorioSala){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new LaboratorioSala;

  }

}
