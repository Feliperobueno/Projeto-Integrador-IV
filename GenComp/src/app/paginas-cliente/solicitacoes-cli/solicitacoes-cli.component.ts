import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes-cli',
  templateUrl: './solicitacoes-cli.component.html',
  styleUrls: ['./solicitacoes-cli.component.scss']
})
export class SolicitacoesCliComponent implements OnInit {

  tipos: string[] = ['Instalação de programas', 'Conserto', 'Melhoria', 'Manutenção preventiva'];

  equipamentos: string[] = ['Computador de mesa', 'Notebook', 'Projetor', 'Acessorios', 'Switch', 'Servidor'];

  local: string[] = ['Sala 101', 'Sala 102', 'Sala 103', 'Sala 104', 'Sala 105'];

  constructor() { }

  ngOnInit(): void {
  }

}
