import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario.model';

const url = "http://localhost:8082/login";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<LoginUsuario[]>{
    return this.http.get<LoginUsuario[]>(url);
  }

  consultarPorId(id: number): Observable<LoginUsuario>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<LoginUsuario>(urlLocal);
  }

  adicionar(LoginUsuario): Observable<LoginUsuario>{
    return this.http.post<LoginUsuario>(url, LoginUsuario, httpOptions);
  }

  alterar(id, LoginUsuario): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, LoginUsuario, httpOptions);
  }

  excluir(id): Observable<LoginUsuario>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<LoginUsuario>(urlLocal, httpOptions);
  }
}
