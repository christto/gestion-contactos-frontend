import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //Esta URL obtiene el listado de todos los contactos en el backend
  private baseURL = "http://localhost:8080/api/v1/contactos";

  constructor(private httpClient : HttpClient) { }

  //Método para listar todos los contactos
  obtenerListaDeContactos():Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseURL}`);
  }

  //Método para guardar el contacto
  registrarContacto(contacto:Contacto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,contacto);
  }
  
  //Método para buscar un contacto por id
  obtenerContactoPorId(id:number):Observable<Contacto>{
    return this.httpClient.get<Contacto>(`${this.baseURL}/${id}`);
  }

  //Método para buscar contactos por nombre
  obtenerContactosPorNombre(nombre:string):Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseURL}/buscar/${nombre}`);
  }

  //Método para actualizar el contacto
  actualizarContacto(id:number,contacto:Contacto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,contacto);
  }

  //Método para eliminar un contacto
  eliminarContacto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
