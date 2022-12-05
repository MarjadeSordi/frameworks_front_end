import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseApi = 'http://localhost:3000/categoria'

  constructor(private http: HttpClient) {

   }

   listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseApi)      
}

  
   buscarPorId(id:number): Observable<Categoria> {

    const uri = `${this.baseApi}/${id}`;

    return this.http.get<Categoria>(uri);  

  }
}
