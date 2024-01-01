import  swal  from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-contacto-detalles',
  templateUrl: './contacto-detalles.component.html',
  styleUrls: ['./contacto-detalles.component.css']
})
export class ContactoDetallesComponent implements OnInit {

  id:number;
  contacto:Contacto;
  constructor(private route:ActivatedRoute, private contactoServicio:ContactoService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contacto = new Contacto();
    this.contactoServicio.obtenerContactoPorId(this.id).subscribe(dato => {
      this.contacto = dato;
      swal(`Detalles de ${this.contacto.nombre}`);
    });
  }

  onSubmit(){
    this.router.navigate(['/contactos']);
  }

}
