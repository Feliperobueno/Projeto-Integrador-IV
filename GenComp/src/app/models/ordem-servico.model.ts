import { Equipamento } from './equipamento.model';
import { LaboratorioSala } from './laboratorio-sala.model';
import { Pessoa } from './pessoa.model';
import { TipoServico } from './tipo-servico.model';
export class OrdemServico {
    id: number;
    funcionario: Pessoa;
    cliente: Pessoa;
    tipoServico: TipoServico;
    dataEmissao: Date = new Date();
    dataFechamento: Date;
    status: string;
    descricao: string;
    laboratorioSala: LaboratorioSala;
    equipamento: Equipamento;
}
