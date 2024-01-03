import swal from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../api-response';
import { UserService } from '../user.service';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.css']
})
export class ActualizarContactoComponent implements OnInit {

  contactoId: number;
  contacto: Contacto = new Contacto();

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  usuarioId: number = parseInt(this.userService.getUserId() || '0', 10);

  ngOnInit(): void {
    this.contactoId = this.route.snapshot.params['id'];
    this.contactoService.obtenerContactoPorId(this.contactoId).subscribe(
      (response: ApiResponse<any>) => {
        if (response.success) {
          this.contacto = response.result;
        }
      });
  }

  onSubmit() {
    this.contactoService.actualizarContacto(this.usuarioId, this.contactoId, this.contacto).subscribe(
      (result: ApiResponse<any>) => {
        if (result.success) {
          swal('Contacto actualizado', result.message, 'success');
          this.router.navigate(['/contactos']);
        } else {
          swal('Error', result.message, 'error')
        }
      });
  }
}
