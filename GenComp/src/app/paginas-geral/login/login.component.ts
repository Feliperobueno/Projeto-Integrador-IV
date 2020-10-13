import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario="";

  senha = "";

  erroUser = "Precisa ter ao menos 4 caracteres";

  abrirHome(){
    this.router.navigate(['/menu'])
  }

  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}