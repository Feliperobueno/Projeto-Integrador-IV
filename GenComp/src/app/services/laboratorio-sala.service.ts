import { LaboratorioSala } from './../models/laboratorio-sala.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:8082/laboratorioSala";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LaboratorioSalaService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<LaboratorioSala[]>{
    return this.http.get<LaboratorioSala[]>(url);
  }

  consultarPorId(id: number): Observable<LaboratorioSala>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<LaboratorioSala>(urlLocal);
  }

  adicionar(LaboratorioSala): Observable<LaboratorioSala>{
    return this.http.post<LaboratorioSala>(url, LaboratorioSala, httpOptions);
  }

  alterar(id, LaboratorioSala): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, LaboratorioSala, httpOptions);
  }

  excluir(id): Observable<LaboratorioSala>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<LaboratorioSala>(urlLocal, httpOptions);
  }
}
