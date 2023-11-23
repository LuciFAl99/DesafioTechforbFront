import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientService } from '../Service/client.service';
import { Client } from '../Model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  client: Client = new Client();
  amount: number = 0;
  description: string = '';
  cardOriginNumber: string = '';
  destinationCardNumber: string = ''

  constructor(private http: HttpClient, private clientService: ClientService, private router: Router, private cdr: ChangeDetectorRef) { }

  onSubmit() {
    Swal.fire({
      title: '¿Estás segura de realizar el pago?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, realizar pago'
    }).then((result) => {
      if (result.isConfirmed) {
        const params = new HttpParams()
          .set('amount', this.amount)
          .set('description', this.description)
          .set('cardOriginNumber', this.cardOriginNumber)
          .set('destinationCardNumber', this.destinationCardNumber);

        const options = {
          params: params,
          withCredentials: true,
          headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };

        this.http.post('http://localhost:8080/api/clients/current/transactions', null, options)
          .subscribe((response) => {
            console.log('Transacción exitosa', response);
            Swal.fire({
              icon: 'success',
              text: 'Pago realizado con éxito',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              this.fetchAndUpdateClientAndNavigate(); // Obtener y actualizar cliente + navegar
            });
          }, (error: HttpErrorResponse) => {
            console.error('Error en la transacción:', error);

            if (error.status === 201 && error.statusText === 'OK') {
              Swal.fire({
                icon: 'success',
                text: 'Pago realizado con éxito',
                showConfirmButton: false,
                timer: 2000
              }).then(() => {
                this.fetchAndUpdateClientAndNavigate();
              });
            } else {
              Swal.fire({
                icon: 'error',
                text: error.error.message || 'Ha ocurrido un error al pagar el préstamo',
                confirmButtonColor: '#7c601893'
              });
            }
          });
      }
    });
  }

  fetchAndUpdateClientAndNavigate() {
    this.clientService.getCurrentClient().subscribe(
      (data: Client) => {
        this.client = data;
        console.log(this.client);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.router.navigate(['/home']);
      }
    );
  }
}
