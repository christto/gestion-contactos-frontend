import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ApiResponse } from '../api-response'; // Asegúrate de importar la interfaz ApiResponse
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`
    .login-container {
      background-color: #4e5d6c;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-card {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    .login-icon {
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
    }
  `]
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
      (response: ApiResponse<any>) => {
        if (response.success) {
          this.userService.setUserId(response.result.usuarioId);
          this.userService.setName(response.result.name);
          swal(
            'Inicio de sesión',
            `¡Hola ${this.userService.getName()}!`,
            'info'
          );
        } else {
          swal(
            'Inicio de sesión',
            response.message,
            'error'
          );
        }
      },
      (error) => {
        swal(
          'Inicio de sesión',
          error.error.message,
          'error'
        );
      }
    );
  }
}
