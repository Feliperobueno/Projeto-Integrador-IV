import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrdemServicoService } from './../../services/ordem-servico.service';
import { OrdemServico } from './../../models/ordem-servico.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Historico } from 'src/app/models/historico.model';
import { HistoricoService } from 'src/app/services/historico.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-historico-fun',
  templateUrl: './historico-fun.component.html',
  styleUrls: ['./historico-fun.component.scss'],
  providers: [MessageService]
})
export class HistoricoFunComponent implements OnInit {

  OptionStatus: string[] = ['Aceito', 'Analisando', 'Em espera', 'Finalizado'];

  listaOs: OrdemServico[] = [];
  obj: OrdemServico = new OrdemServico();
  obj2: Historico = new Historico();
  mens = '';
  opcaoSel: number;
  idFunc: number;
  listaFuncionario: OrdemServico[] = [];
  modalRef: BsModalRef;
  statusSel: string;

  constructor(private api2: OrdemServicoService, private ap1: PessoaService, private api3: TipoServicoService,private modalService: BsModalService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.api2.consultar()
    .toPromise()
    .then
    (res =>{
      this.listaOs = res;
    });
  }

  consultarOsFunc(){
    this.api2.consultarOsPorFunc(this.idFunc)
    .toPromise()
    .then
    (res =>{
      this.listaFuncionario = res;
    });
  }

  adicionar(){


    this.api2.adicionar(this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = "A registro id " + ordemServico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
  }

  excluir(){
    this.api2.excluir(this.obj.id)
    .toPromise()
    .then(ordemServico => {
      this.mens = "O registro foi excluida com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'error', summary: 'Success', detail: 'Excluido com sucesso'});
  }

  atribuirStatus(status) {
    this.statusSel = String(status);
    console.log(`Funcionario: ${this.statusSel}`);
  }

  alterar(){
    this.obj.status =  this.statusSel;
    

    this.api2.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = "A O.S id " + ordemServico.id + + " alterado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'info', summary: 'Success', detail: 'Alterado com sucesso'});
    this.modalRef.hide();
  }

  adicionarHistorico(){

    this.obj2.ordemServico = this.obj;
    this.obj2.data = new Date();
    this.obj2.funcionario = this.obj.funcionario;
    this.obj2.status = this.obj.status;

    this.api2.adicionar(this.obj2)
    .toPromise()
    .then(historico => {
      this.mens = "A registro id " + historico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  atualizar(){
    this.alterar();
    this.adicionarHistorico();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  

  carregarDados(p: OrdemServico){
    this.obj = p;

  }

  atribuirServico(opcao:number) {
   this.opcaoSel = opcao;
  }

  limparCampos(){

    this.obj = new OrdemServico;

  }

}
