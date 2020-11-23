import { Equipamento } from './../models/equipamento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:8082/equipamento";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<Equipamento[]>{
    return this.http.get<Equipamento[]>(url);
  }

  consultarPorId(id: number): Observable<Equipamento>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Equipamento>(urlLocal);
  }

  adicionar(Equipamento): Observable<Equipamento>{
    return this.http.post<Equipamento>(url, Equipamento, httpOptions);
  }

  alterar(id, Equipamento): Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Equipamento, httpOptions);
  }

  excluir(id): Observable<Equipamento>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Equipamento>(urlLocal, httpOptions);
  }
}
