import { Equipamento } from './equipamento.model';
import { LaboratorioSala } from './laboratorio-sala.model';
import { Pessoa } from './pessoa.model';
import { TipoServico } from './tipo-servico.model';
export class OrdemServico {
    id: number;
    funcionario: Pessoa = new Pessoa();
    cliente: Pessoa = new Pessoa();
    tipoServico: TipoServico = new TipoServico();
    dataEmissao: Date = new Date();
    dataFechamento: Date;
    status: string;
    descricao: string;
    laboratorioSala: LaboratorioSala = new LaboratorioSala();
    equipamento: Equipamento = new Equipamento();
}
