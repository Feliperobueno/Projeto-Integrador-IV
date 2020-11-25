import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LaboratorioSala } from 'src/app/models/laboratorio-sala.model';
import { LaboratorioSalaService } from 'src/app/services/laboratorio-sala.service';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.component.html',
  styleUrls: ['./cadastro-sala.component.scss'],
  providers: [MessageService]
})
export class CadastroSalaComponent implements OnInit {

  sala: string;
  obj: LaboratorioSala = new LaboratorioSala();
  obj2: LaboratorioSala = new LaboratorioSala();
  lista: LaboratorioSala[] = [];
  mens = '';
  modalRef: BsModalRef;

  constructor(private api: LaboratorioSalaService, private messageService: MessageService, private modalService: BsModalService) { }


  ngOnInit(): void {
    this.consultar()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
  }

  excluir(){
    this.api.excluir(this.obj2.id)
    .toPromise()
    .then(LaboratorioSala => {
      this.mens = "Sala excluida com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'error', summary: 'Excluido', detail: 'Excluido com sucesso'});
  }

  alterar(){
    this.api.alterar(this.obj2.id,this.obj2)
    .toPromise()
    .then(LaboratorioSala => {
      this.mens = LaboratorioSala.nome + " alterado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'info', summary: 'Success', detail: 'Alterado com sucesso'});
    this.modalRef.hide();
  }

  carregarDados(p:LaboratorioSala){
    this.obj2 = p;

  }

  limparCampos(){

    this.obj = new LaboratorioSala;

  }

}