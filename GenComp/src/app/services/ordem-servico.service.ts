import { Historico } from './../models/historico.model';
import { OrdemServico } from './../models/ordem-servico.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://localhost:8082/ordemServico";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(url);
  }

  consultarPorId(id: number): Observable<OrdemServico>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<OrdemServico>(urlLocal);
  }

  adicionar(OrdemServico): Observable<OrdemServico>{
    return this.http.post<OrdemServico>(url, OrdemServico, httpOptions);
  }

  alterar(id, OrdemServico): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, OrdemServico, httpOptions);
  }

  excluir(id): Observable<OrdemServico>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<OrdemServico>(urlLocal, httpOptions);
  }

  
}
