import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DniType } from '../Model/dni-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  dniType: DniType = DniType.DNI;
  dni: string = '';
  password: string = '';
  dniTypes = Object.values(DniType);

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    Swal.fire({
      title: 'Estás por registrarte en Unicomer',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, registrarme'
    }).then((result) => {
      if (result.isConfirmed) {
        const params = new HttpParams()
          .set('firstName', this.firstName)
          .set('lastName', this.lastName)
          .set('dniType', this.dniType)
          .set('dni', this.dni)
          .set('password', this.password)

        const options = {
          params: params,
          withCredentials: true,
          headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };

        this.http.post('http://localhost:8080/api/clients', null, options)
          .subscribe((response) => {
            console.log('Registro exitoso', response);
            this.router.navigate(['/home']);
            Swal.fire({
              icon: 'success',
              text: 'Registro realizado realizado con éxito',
              showConfirmButton: false,
              timer: 2000
            })
          }, (error: HttpErrorResponse) => {
            console.error('Error en el registro:', error);

            if (error.status === 201 && error.statusText === 'OK') {
              Swal.fire({
                icon: 'success',
                text: 'Registro realizado con éxito',
                showConfirmButton: false,
                timer: 2000
              })
            } else {
              Swal.fire({
                icon: 'error',
                text: error.error.message || 'Ha ocurrido un error al registrarse',
                confirmButtonColor: '#7c601893'
              });
            }
          });
      }
    });
  }
}
