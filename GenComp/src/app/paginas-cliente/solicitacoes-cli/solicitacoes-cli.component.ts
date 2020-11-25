import { LaboratorioSala } from './../../models/laboratorio-sala.model';
import { Equipamento } from 'src/app/models/equipamento.model';
import { TipoServico } from 'src/app/models/tipo-servico.model';
import { LaboratorioSalaService } from './../../services/laboratorio-sala.service';
import { OrdemServico } from './../../models/ordem-servico.model';
import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-solicitacoes-cli',
  templateUrl: './solicitacoes-cli.component.html',
  styleUrls: ['./solicitacoes-cli.component.scss'],
  providers: [MessageService]
})
export class SolicitacoesCliComponent implements OnInit {

  tipos: string[] = ['Instalação de programas', 'Conserto', 'Melhoria', 'Manutenção preventiva'];

  equipamentos: string[] = ['Computador de mesa', 'Notebook', 'Projetor', 'Acessorios', 'Switch', 'Servidor'];

  local: string[] = ['Sala 101', 'Sala 102', 'Sala 103', 'Sala 104', 'Sala 105'];

  descricao;

  data;

  lista: OrdemServico[] = [];
  listaServico: TipoServico[] = [];
  listaEquipamento: Equipamento[] = [];
  listaLocal: LaboratorioSala[] = [];
  obj: OrdemServico = new OrdemServico();
  objEquipamentoSel: Equipamento = new Equipamento();
  objEquipamentoSel2: Equipamento = new Equipamento();
  objServicoSel: TipoServico = new TipoServico();
  objLocalSel: LaboratorioSala = new LaboratorioSala();
  objLocalSel2: LaboratorioSala = new LaboratorioSala();
  objPessoaSel: Pessoa = new Pessoa();
  mens = '';

  constructor(private api:OrdemServicoService, private api3:EquipamentoService, private api4:LaboratorioSalaService, private api5:PessoaService, private messageService: MessageService) { }

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
    this.obj.equipamento.id = 1;
    this.obj.laboratorioSala.id = 1;
    this.obj.cliente.id=2;
    this.api.adicionar(this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = ordemServico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
    

  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(ordemServico => {
      this.mens = "OS excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = ordemServico.id + " alterado(a) com sucesso!";
      this.consultar();
    })
  }

  carregarDados(p: OrdemServico){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new OrdemServico;

  }

}
