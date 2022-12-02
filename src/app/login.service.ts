import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseApi = "http://localhost:3000/login"

  constructor(private http: HttpClient) { }

  logar(usuario: string, senha: string ): Observable<Login> {
    return (this.http.post<Login>(this.baseApi, {usuario, senha}))
}
}


