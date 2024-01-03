import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response';
import { LoginRequest } from './loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://18.234.181.80/api/v1";

  constructor(private httpClient: HttpClient) { }

  // Método para iniciar sesión
  login(request: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.httpClient.post<ApiResponse<LoginResponse>>(`${this.baseURL}/usuario/login`, request);
  }
}

export interface LoginResponse {
  usuarioId: number;
  name: string;
}

