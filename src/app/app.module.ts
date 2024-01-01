import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarContactoComponent } from './registrar-contacto/registrar-contacto.component';
import { FormsModule } from '@angular/forms';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';
import { ContactoDetallesComponent } from './contacto-detalles/contacto-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    RegistrarContactoComponent,
    ActualizarContactoComponent,
    ContactoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
