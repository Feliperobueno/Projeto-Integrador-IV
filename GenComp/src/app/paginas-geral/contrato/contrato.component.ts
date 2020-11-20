import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {

  checkConcordo = false;

  aceito() {
    this.router.navigate(['/menu-cli']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
