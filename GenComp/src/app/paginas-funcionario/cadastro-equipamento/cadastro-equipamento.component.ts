import { EquipamentoService } from './../../services/equipamento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Equipamento } from 'src/app/models/equipamento.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.scss'],
  providers: [MessageService]
})
export class CadastroEquipamentoComponent implements OnInit {

  equipamento: any;

  obj: Equipamento = new Equipamento();
  obj2: Equipamento = new Equipamento();
  lista: Equipamento[] = [];
  mens = '';
  modalRef: BsModalRef;


  constructor(private api: EquipamentoService, private messageService: MessageService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.consultar();
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
    .then(Equipamento => {
      this.mens = Equipamento.nome + " foi adicionado(a) com sucesso!";
      this.consultar();
    });

    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
  }

  excluir(){
    this.api.excluir(this.obj2.id)
    .toPromise()
    .then(Equipamento => {
      this.mens = "Sala excluida com sucesso!";
      this.consultar();
    });

    this.messageService.add({severity:'error', summary: 'Success', detail: 'Excluido com sucesso'});
  }

  alterar(){
    this.api.alterar(this.obj2.id,this.obj2)
    .toPromise()
    .then(Equipamento => {
      this.mens = Equipamento.nome + " alterado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'info', summary: 'Success', detail: 'Alterado com sucesso'});
    this.modalRef.hide();
  }

  carregarDados(p:Equipamento){
    this.obj2 = p;

  }

  limparCampos(){

    this.obj = new Equipamento;

  }

}