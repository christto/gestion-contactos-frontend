import swal from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactos: Contacto[];
  textoBusqueda: string = '';

  usuarioId: number = 2;

  constructor(private contactoServicio: ContactoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }

  actualizarContacto(contactoId: number) {
    this.router.navigate(['actualizar-contacto', contactoId]);
  }

  private obtenerContactos() {
    this.contactoServicio.obtenerListaDeContactos(this.usuarioId).subscribe(dato => {
      this.contactos = dato;
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
          console.log(dato);
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
