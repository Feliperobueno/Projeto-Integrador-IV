import { OrdemServico } from './../../models/ordem-servico.model';
import { OrdemServicoService } from './../../services/ordem-servico.service';
import { EquipamentoService } from './../../services/equipamento.service';
import { TipoServicoService } from './../../services/tipo-servico.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pessoa } from 'src/app/models/pessoa.model';
import { TipoServico } from 'src/app/models/tipo-servico.model';
import { Historico } from 'src/app/models/historico.model';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-solicitacoes-fun',
  templateUrl: './solicitacoes-fun.component.html',
  styleUrls: ['./solicitacoes-fun.component.scss']
})
export class SolicitacoesFunComponent implements OnInit {

  funcionarios: string[]= ['Felipe', 'Bruno', 'Ana', 'Netto'];

  servico: string[] = ['Arrumar', 'ver', 'instalar', 'quebrar'];

  equipamento: string[] = ['Computador', 'projetor', 'Swhitch', 'Servidor'];

  listaOs: OrdemServico[] = [];
  obj: OrdemServico = new OrdemServico();
  objHistorico: Historico = new Historico();
  mens = '';
  perfil: string = "Funcionario"
  listaFuncionario: Pessoa[] = [];
  objServicoSel: TipoServico = new TipoServico();
  objFuncionarioSel: Pessoa = new Pessoa();
  listaServico: TipoServico[] = [];
  now = new Date;
  status="Aberto";

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private api:OrdemServicoService, private api2: TipoServicoService, private api3: PessoaService, private api4: HistoricoService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.consultar();
    this.consultarTipoServico();
    this.consultarPorPerfil();
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then
    (res =>{
      this.listaOs = res;
    });
  }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = ordemServico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(ordemServico => {
      this.mens = "O.S. excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.obj.tipoServico = this.objServicoSel;
    this.obj.funcionario = this.objFuncionarioSel;

    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = ordemServico.id + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  consultarTipoServico(){
    this.api2.consultar()
    .toPromise()
    .then
    (res =>{
      this.listaServico = res;
    });
  }

  atribuirServico(servico:TipoServico) {
    this.objServicoSel = servico;
    console.log(`Serviço: ${this.objServicoSel.descricao}`);
  }

  atribuirFuncionario(funcionario:Pessoa) {
    this.objFuncionarioSel = funcionario;
    console.log(`Serviço: ${this.objServicoSel.descricao}`);
  }



  consultarPorPerfil(){
    this.api3.consultarPorPerfil(this.perfil)
    .toPromise()
    .then
    (res =>{
      this.listaFuncionario = res;
    });
  }


atualizarOsHistorico() {
  this.alterar()
  this.adicionarHistorico()
}

  adicionarHistorico(){

    this.objHistorico.ordemServico = this.obj;
    this.objHistorico.funcionario = this.objFuncionarioSel;
    this.objHistorico.data = this.now;
    this.objHistorico.status = status;
    

    this.api.adicionar(this.objHistorico)
    .toPromise()
    .then(historico => {
      this.mens = "A registro id " + historico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }


  carregarDados(p: OrdemServico){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new OrdemServico;

  }

}
