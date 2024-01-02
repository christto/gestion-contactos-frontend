import { Component } from '@angular/core';
import { UserService } from './user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService) {}
  title = 'Sistema gestión de contactos';

  toggleLogout(): void {
    swal('Cierre de sesión', `¡Hasta luego ${this.userService.getName()}!`, 'info');
    this.userService.setUserId(null);
    this.userService.setUserId(null);
  }

}
