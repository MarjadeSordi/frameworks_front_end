import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Treino } from './treino';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})

export class TreinoApiService {

  baseApi = "http://localhost:3000/treino"

  constructor(private http: HttpClient) { }

  listar(): Observable<Treino[]> {
      return this.http.get<Treino[]>(this.baseApi)      
  }


  buscarPorId(id:number): Observable<Treino> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<Treino>(uri);  
  }
  

deletar(id: number){

    const uri = `${this.baseApi}/${id}`;//baseAPI + "/"+ id;

    return this.http.delete(uri);
  }
  
  
  editar(id: number, treino: Treino): Observable<Treino> {

    const uri = `${this.baseApi}/${id}`;//baseAPI + "/"+ id;

    return this.http.put<Treino>(uri, treino, httpOptions);    

  }

  inserir(treino: Treino): Observable<Treino> {
    return this.http.post<Treino>(this.baseApi, treino, httpOptions);    

  }
}



