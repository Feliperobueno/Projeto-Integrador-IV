import { CadastroEquipamentoComponent } from './paginas-funcionario/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroSalaComponent } from './paginas-funcionario/cadastro-sala/cadastro-sala.component';
import { SolicitacoesCliComponent } from './paginas-cliente/solicitacoes-cli/solicitacoes-cli.component';
import { PerfilCliComponent } from './paginas-cliente/perfil-cli/perfil-cli.component';
import { HistoricoCliComponent } from './paginas-cliente/historico-cli/historico-cli.component';
import { HomeCliComponent } from './paginas-cliente/home-cli/home-cli.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFunComponent } from './paginas-funcionario/home-fun/home-fun.component';
import { HistoricoFunComponent } from './paginas-funcionario/historico-fun/historico-fun.component';
import { PerfilFunComponent } from './paginas-funcionario/perfil-fun/perfil-fun.component';
import { SolicitacoesFunComponent } from './paginas-funcionario/solicitacoes-fun/solicitacoes-fun.component';
import { CadastroFuncionarioComponent } from './paginas-funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroServicoComponent } from './paginas-funcionario/cadastro-servico/cadastro-servico.component';
import { LoginComponent } from './paginas-geral/login/login.component';
import { CadastroComponent } from './paginas-geral/cadastro/cadastro.component';
import { ContratoComponent } from './paginas-geral/contrato/contrato.component';
import { MenuCliComponent } from './paginas-cliente/menu-cli/menu-cli.component';
import { MenuFunComponent } from './paginas-funcionario/menu-fun/menu-fun.component';


const routes: Routes = [
  /* Routes de cliente*/

  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'menu-cli', component: MenuCliComponent},
  {path: 'home-cli', component: HomeCliComponent},
  {path: 'historico-cli', component: HistoricoCliComponent},
  {path: 'perfil-cli', component: PerfilCliComponent},
  {path: 'solicitacoes-cli', component: SolicitacoesCliComponent},

  /* Routes de funcionario*/

  {path: 'home-fun', component: HomeFunComponent},
  {path: 'menu-fun', component: MenuFunComponent},
  {path: 'historico-fun', component: HistoricoFunComponent},
  {path: 'perfil-fun', component: PerfilFunComponent},
  {path: 'solicitacoes-fun', component: SolicitacoesFunComponent},
  {path: 'cadastro-sala', component: CadastroSalaComponent},
  {path: 'cadastro-equipamento', component: CadastroEquipamentoComponent},
  {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent},
  {path: 'cadastro-servico', component: CadastroServicoComponent},

  /* Routes gerais */

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'contrato', component: ContratoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
