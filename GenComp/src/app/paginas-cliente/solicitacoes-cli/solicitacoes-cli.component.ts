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


@Component({
  selector: 'app-solicitacoes-cli',
  templateUrl: './solicitacoes-cli.component.html',
  styleUrls: ['./solicitacoes-cli.component.scss']
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

  constructor(private api:OrdemServicoService, private api2:TipoServicoService, private api3:EquipamentoService, private api4:LaboratorioSalaService, private api5:PessoaService) { }

  ngOnInit(): void {
     this.consultar();
     this.consultarEquipamento();
     this.consultarLocal();
     this.consultarTipoServico();

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
    this.consultarEquipamentoid();
    this.consultarLocalid();
    this.consultarClienteid();
    this.obj.laboratorioSala = this.objLocalSel2;
    this.obj.equipamento = this.objEquipamentoSel2;
    this.obj.cliente = this.objPessoaSel;
    this.obj.status = "Aberto";
    this.api.adicionar(this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = "A O.S id " + ordemServico.id + " foi adicionado(a) com sucesso!";
      this.consultar();
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(ordemServico => {
      this.mens = "A O.S. excluida com sucesso!";
      this.consultar();
    });
  }

  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(ordemServico => {
      this.mens = "A O.S id " + ordemServico.id + + " alterado(a) com sucesso!";
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

  atribuirServico(id) {
    this.objServicoSel.id = id;
    console.log(`Serviço: ${this.objEquipamentoSel.nome}`);
  }


  consultarEquipamento(){
    this.api3.consultar()
    .toPromise()
    .then
    (res =>{
      this.listaEquipamento = res;
    });
  }

  consultarEquipamentoid(){
    this.api3.consultarPorId( this.objEquipamentoSel.id)
    .toPromise()
    .then
    (res =>{
      this.objEquipamentoSel2 = res;
    });
  }

  consultarClienteid(){
    this.api5.consultarPorId(2)
    .toPromise()
    .then
    (res =>{
      this.objPessoaSel = res;
    });
  }

  consultarLocalid(){
    this.api4.consultarPorId( this.objLocalSel.id)
    .toPromise()
    .then
    (res =>{
      this.objLocalSel2 = res;
    });
  }

  atribuirEquipamento(id) {
    this.objEquipamentoSel.id = id;
    console.log(`Equipamento: ${this.objEquipamentoSel.id}`);
  }

  consultarLocal(){
    this.api4.consultar()
    .toPromise()
    .then
    (res =>{
      this.listaLocal = res;
    });
  }

  atribuirLocal(id) {
    this.objLocalSel.id = id;
    console.log(`Local: ${id}`);
  }

  carregarDados(p: OrdemServico){
    this.obj = p;

  }

  limparCampos(){

    this.obj = new OrdemServico;

  }

}
