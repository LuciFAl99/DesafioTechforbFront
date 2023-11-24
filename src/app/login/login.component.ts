import { Component } from '@angular/core';
import { LoginServiceService } from '../Service/login.service';
import { Router } from '@angular/router';
import { DniType } from '../Model/dni-type';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dni: string = '';
  password: string = '';
  dniTypes = Object.values(DniType);

  constructor(
    private loginService: LoginServiceService,
    private router: Router){}


  onSubmit() {
    this.loginService.login(this.dni, this.password ).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso');
        console.log('Redirigiendo a /home...');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('Error de inicio de sesión', error);
      }
    );
  }
}