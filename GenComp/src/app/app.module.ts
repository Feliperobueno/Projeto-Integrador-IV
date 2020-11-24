import { PessoaService } from './services/pessoa.service';
import { OrdemServicoService } from './services/ordem-servico.service';
import { HistoricoService } from './services/historico.service';
import { HttpClientModule } from '@angular/common/http';
import { LaboratorioSalaService } from './services/laboratorio-sala.service';
import { SolicitacoesCliComponent } from './paginas-cliente/solicitacoes-cli/solicitacoes-cli.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { LoginComponent } from './paginas-geral/login/login.component';
import { CadastroComponent } from './paginas-geral/cadastro/cadastro.component';

import { ContratoComponent } from './paginas-geral/contrato/contrato.component';
import { CadastroSalaComponent } from './paginas-funcionario/cadastro-sala/cadastro-sala.component';
import { CadastroFuncionarioComponent } from './paginas-funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroServicoComponent } from './paginas-funcionario/cadastro-servico/cadastro-servico.component';
import { CadastroEquipamentoComponent } from './paginas-funcionario/cadastro-equipamento/cadastro-equipamento.component';
import { MenuFunComponent } from './paginas-funcionario/menu-fun/menu-fun.component';
import { MenuCliComponent } from './paginas-cliente/menu-cli/menu-cli.component';
import { HistoricoFunComponent } from './paginas-funcionario/historico-fun/historico-fun.component';
import { HistoricoCliComponent } from './paginas-cliente/historico-cli/historico-cli.component';
import { HomeCliComponent } from './paginas-cliente/home-cli/home-cli.component';
import { HomeFunComponent } from './paginas-funcionario/home-fun/home-fun.component';
import { PerfilCliComponent } from './paginas-cliente/perfil-cli/perfil-cli.component';
import { PerfilFunComponent } from './paginas-funcionario/perfil-fun/perfil-fun.component';
import { SolicitacoesFunComponent } from './paginas-funcionario/solicitacoes-fun/solicitacoes-fun.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EquipamentoService } from './services/equipamento.service';
import { TipoServicoService } from './services/tipo-servico.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ContratoComponent,
    CadastroSalaComponent,
    CadastroFuncionarioComponent,
    CadastroServicoComponent,
    CadastroEquipamentoComponent,
    MenuFunComponent,
    MenuCliComponent,
    HistoricoFunComponent,
    HistoricoCliComponent,
    HomeCliComponent,
    HomeFunComponent,
    PerfilCliComponent,
    PerfilFunComponent,
    SolicitacoesCliComponent,
    SolicitacoesFunComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    InputMaskModule,
    InputNumberModule,
    PasswordModule,
    TableModule,
    ToggleButtonModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],

  providers: [
    LaboratorioSalaService,
    EquipamentoService,
    HistoricoService,
    OrdemServicoService,
    PessoaService,
    TipoServicoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
