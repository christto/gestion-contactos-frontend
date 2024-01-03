import swal from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../contacto';
import { ApiResponse } from '../api-response';

@Component({
  selector: 'app-contacto-detalles',
  templateUrl: './contacto-detalles.component.html',
  styleUrls: ['./contacto-detalles.component.css']
})
export class ContactoDetallesComponent implements OnInit {

  contactoId: number;
  contacto: Contacto;

  constructor(
    private route: ActivatedRoute,
    private contactoServicio: ContactoService,
    private router: Router) 
    { }

  ngOnInit(): void {
    this.contactoId = this.route.snapshot.params['id'];
    this.contacto = new Contacto();
    this.contactoServicio.obtenerContactoPorId(this.contactoId).subscribe(
      (response: ApiResponse<any>) => {
        if (response.success) {
          this.contacto = response.result;
          swal(`Detalles de ${this.contacto.nombre}`);
        } else {
          swal('Error', response.message, 'error');
        }
      });
  }

  onSubmit() {
    this.router.navigate(['/contactos']);
  }

}
