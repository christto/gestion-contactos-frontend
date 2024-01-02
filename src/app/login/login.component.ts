import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private loginService: LoginService, private userService: UserService) { }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    const loginRequest = { email: this.correo, password: this.password };

    this.loginService.login(loginRequest).subscribe(
      (response: any) => {
        this.userService.setUserId(response.usuarioId);
        this.userService.setName(response.name);
        swal(
          'Inicio de sesión',
          `¡Bienvenido ${this.userService.getName()}!`,
          'info'
        )
      },
      (error) => {
        swal(
          'Inicio de sesión',
          error.error.message,
          'error'
        )
      }
    );
  }
}
