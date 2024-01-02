import swal from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactos: Contacto[];
  textoBusqueda: string = '';

  
  constructor(private contactoServicio: ContactoService, private router: Router, private userService: UserService) { }

  usuarioId: number = parseInt(this.userService.getUserId() || '0', 10);

  ngOnInit(): void {
    this.obtenerContactos();
  }

  actualizarContacto(contactoId: number) {
    this.router.navigate(['actualizar-contacto', contactoId]);
  }

  private obtenerContactos() {
    this.contactoServicio.obtenerListaDeContactos(this.usuarioId).subscribe(dato => {
      this.contactos = dato.sort((a, b) => a.nombre.localeCompare(b.nombre));
    });
  }

  eliminarContacto(contactoId: number) {
    swal({
      title: '¿Deseas eliminar el contacto?',
      text: "Confirma si deseas eliminar el contacto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.contactoServicio.eliminarContacto(this.usuarioId, contactoId).subscribe(dato => {
          this.textoBusqueda = '';
          this.obtenerContactos();
          swal(
            'Contacto eliminado',
            'El contacto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelContacto(contactoId: number) {
    this.router.navigate(['contacto-detalles', contactoId]);
  }

  buscarContactos() {
    this.contactoServicio.obtenerListaDeContactos(this.usuarioId).subscribe(dato => {
      this.contactos = dato.filter(contacto =>
        contacto.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        contacto.telefono.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      ).sort((a, b) => a.nombre.localeCompare(b.nombre));
    });
  }

  limpiarBusqueda() {
    this.textoBusqueda = '';
    this.obtenerContactos()
  }

}
