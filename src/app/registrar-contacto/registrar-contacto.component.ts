import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-contacto',
  templateUrl: './registrar-contacto.component.html',
  styleUrls: ['./registrar-contacto.component.css']
})
export class RegistrarContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  constructor(private contactoServicio: ContactoService, private router: Router) { }

  usuarioId: number = 2;

  ngOnInit(): void {
  }

  guardarContacto() {
    this.contactoServicio.registrarContacto(this.usuarioId, this.contacto).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeContactos();
    }, error => swal('Error', 'No se guardó el contacto. Error: Ya existe el número telefónico.', 'error'));
  }

  irALaListaDeContactos() {
    this.router.navigate(['/contactos']);
    swal('Contacto registrado', `El contacto ${this.contacto.nombre} ha sido registrado con exito`, 'success');
  }

  onSubmit() {
    this.guardarContacto();
  }
}
