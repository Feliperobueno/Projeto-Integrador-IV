import { Component, OnInit } from '@angular/core';
import { TipoServico } from 'src/app/models/tipo-servico.model';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.scss']
})
export class CadastroServicoComponent implements OnInit {
  
  servico;

  lista: TipoServico[] = [];
  obj: TipoServico = new TipoServico();
  mens = '';

  constructor(private api:TipoServicoService) { }

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
    .then(TipoServico => {
      this.mens = TipoServico.descricao + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(TipoServico => {
      this.mens = "Serviço excluido com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(TipoServico => {
      this.mens = TipoServico.descricao + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p: TipoServico){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new TipoServico;

  }


}
