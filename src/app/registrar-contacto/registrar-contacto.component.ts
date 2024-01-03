import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApiResponse } from '../api-response';

@Component({
  selector: 'app-registrar-contacto',
  templateUrl: './registrar-contacto.component.html',
  styleUrls: ['./registrar-contacto.component.css']
})
export class RegistrarContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  constructor(private contactoServicio: ContactoService, private router: Router, private userService: UserService) { }

  usuarioId: number = parseInt(this.userService.getUserId() || '0', 10);

  ngOnInit(): void {
  }

  guardarContacto() {
    this.contactoServicio.registrarContacto(this.usuarioId, this.contacto).subscribe(
      (result: ApiResponse<any>) => {
        if (result.success) {
          swal('Contacto registrado', result.message, 'success');
          this.router.navigate(['/contactos']);
        } else {
          swal('Error', result.message, 'error')
        }
      });
  }

  onSubmit() {
    this.guardarContacto();
  }
}
