import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from './loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  //Método para iniciar sesión
  login(request: LoginRequest): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/usuario/login`, request);
  }
  
}
