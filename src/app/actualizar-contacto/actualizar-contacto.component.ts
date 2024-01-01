import  swal  from 'sweetalert2';
import { ContactoService } from './../contacto.service';
import { Contacto } from './../contacto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.css']
})
export class ActualizarContactoComponent implements OnInit {

  id:number;
  contacto:Contacto = new Contacto();
  constructor(private contactoService:ContactoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contactoService.obtenerContactoPorId(this.id).subscribe(dato =>{
      this.contacto = dato;
    },error => console.log(error));
  }

  irAlaListaDeContactos(){
    this.router.navigate(['/contactos']);
    swal('Contacto actualizado',`El contacto ${this.contacto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.contactoService.actualizarContacto(this.id,this.contacto).subscribe(dato => {
      this.irAlaListaDeContactos();
    },error => swal('Error', 'No se actualizó el contacto. Error: Ya existe el número telefónico.', 'error'));
  }
}
