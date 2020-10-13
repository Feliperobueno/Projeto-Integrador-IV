import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-fun',
  templateUrl: './historico-fun.component.html',
  styleUrls: ['./historico-fun.component.scss']
})
export class HistoricoFunComponent implements OnInit {

  OptionStatus: string[] = ['Aceito', 'Analisando', 'Em espera', 'Finalizado']

  constructor() { }

  ngOnInit(): void {
  }

}
