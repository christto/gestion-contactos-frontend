import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseURL = "http://18.234.181.80/api/v1";

  constructor(private httpClient: HttpClient) { }

  // Método para listar todos los contactos
  obtenerListaDeContactos(usuarioId: number): Observable<ApiResponse<Contacto[]>> {
    return this.httpClient.get<ApiResponse<Contacto[]>>(`${this.baseURL}/contactos/${usuarioId}`);
  }

  // Método para guardar el contacto
  registrarContacto(usuarioId: number, contacto: Contacto): Observable<ApiResponse<string>> {
    return this.httpClient.post<ApiResponse<string>>(`${this.baseURL}/contactos/${usuarioId}`, contacto);
  }

  // Método para buscar un contacto por id
  obtenerContactoPorId(contactoId: number): Observable<ApiResponse<Contacto>> {
    return this.httpClient.get<ApiResponse<Contacto>>(`${this.baseURL}/contacto/${contactoId}`);
  }

  // Método para actualizar el contacto
  actualizarContacto(usuarioId: number, contactoId: number, contacto: Contacto): Observable<ApiResponse<Contacto>> {
    return this.httpClient.put<ApiResponse<Contacto>>(`${this.baseURL}/contactos/${usuarioId}/${contactoId}`, contacto);
  }

  // Método para eliminar un contacto
  eliminarContacto(usuarioId: number, contactoId: number): Observable<ApiResponse<Map<string, boolean>>> {
    return this.httpClient.delete<ApiResponse<Map<string, boolean>>>(`${this.baseURL}/contactos/${usuarioId}/${contactoId}`);
  }
}
