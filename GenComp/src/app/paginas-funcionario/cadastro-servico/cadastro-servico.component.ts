import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { TipoServico } from 'src/app/models/tipo-servico.model';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.scss'],
  providers: [MessageService]
})
export class CadastroServicoComponent implements OnInit {
  
  servico;

  lista: TipoServico[] = [];
  obj: TipoServico = new TipoServico();
  obj2: TipoServico = new TipoServico();
  mens = '';
  modalRef: BsModalRef;

  constructor(private api:TipoServicoService, private messageService: MessageService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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

    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
  }

  excluir(){
    this.api.excluir(this.obj2.id)
    .toPromise()
    .then(TipoServico => {
      this.mens = "Serviço excluido com sucesso!";
      this.consultar();
    });

    this.messageService.add({severity:'error', summary: 'Success', detail: 'Excluido com sucesso'});
  }

  alterar(){
    this.api.alterar(this.obj2.id,this.obj2)
    .toPromise()
    .then(TipoServico => {
      this.mens = TipoServico.descricao + " alterado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'info', summary: 'Success', detail: 'Alterado com sucesso'});
    this.modalRef.hide();
  }

  carregarDados(p: TipoServico){
    this.obj2 = p;

  }

  limparCampos(){

    this.obj = new TipoServico;

  }


}
