import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-solicitacoes-fun',
  templateUrl: './solicitacoes-fun.component.html',
  styleUrls: ['./solicitacoes-fun.component.scss']
})
export class SolicitacoesFunComponent implements OnInit {

  funcionarios: string[]= ['Felipe', 'Bruno', 'Ana', 'Netto'];

  servico: string[] = ['Arrumar', 'ver', 'instalar', 'quebrar'];

  equipamento: string[] = ['Computador', 'projetor', 'Swhitch', 'Servidor'];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
