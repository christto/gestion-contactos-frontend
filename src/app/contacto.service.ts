import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //Esta URL obtiene el listado de todos los contactos en el backend
  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  //Método para listar todos los contactos
  obtenerListaDeContactos(usuarioId: number): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(`${this.baseURL}/contactos/${usuarioId}`);
  }

  //Método para guardar el contacto
  registrarContacto(usuarioId: number, contacto: Contacto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/contactos/${usuarioId}`, contacto);
  }

  //Método para buscar un contacto por id
  obtenerContactoPorId(contactoId: number): Observable<Contacto> {
    return this.httpClient.get<Contacto>(`${this.baseURL}/contacto/${contactoId}`);
  }

  //Método para buscar contactos por nombre
  obtenerContactosPorNombre(nombre: string): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(`${this.baseURL}/buscar/${nombre}`);
  }

  //Método para actualizar el contacto
  actualizarContacto(contactoId: number, contacto: Contacto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/contactos/${contactoId}`, contacto);
  }

  //Método para eliminar un contacto
  eliminarContacto(usuarioId: number, contactoId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/contactos/${usuarioId}/${contactoId}`);
  }
}
