import { OrdemServico } from './ordem-servico.model';
import { Pessoa } from './pessoa.model';

export class Historico {
    id: number;
    ordemServico: OrdemServico;
    data: Date;
    status: string;
    funcionario: Pessoa;
}
