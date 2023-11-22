import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Service/client.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ClientLoan } from '../Model/clientloan';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  client: Client = new Client();

  constructor(private clientService: ClientService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getCurrentClient().subscribe(
      (data: Client) => {
        this.client = data;
        console.log(this.client);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  idLoan: number = 0;
  card: string = '';
  amount: number = 0;
  
  onPaymentSubmit() {
    const params = new HttpParams()
      .set('idLoan', this.idLoan)
      .set('card', this.card)
      .set('amount', this.amount);
  
    const options = {
      params: params,
      withCredentials: true,
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
  
    this.httpClient.post('http://localhost:8080/api/current/loans', null, options)
    .subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          text: 'Pago realizado con éxito',
          showConfirmButton: false,
          timer: 2000
        }).then(() => this.router.navigate(['/home']));
      },
      (error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);

        if (error.status === 200 && error.statusText === 'OK') {

          Swal.fire({
            icon: 'success',
            text: 'Pago realizado con éxito',
            showConfirmButton: false,
            timer: 2000
          }).then(() => this.router.navigate(['/home']));
        } else {

          Swal.fire({
            icon: 'error',
            text: error.error.message || 'Ha ocurrido un error al pagar el préstamo',
            confirmButtonColor: "#7c601893"
          });
        }
      }
    );
  }
  
  
  onCheckboxChange(event: any, loan: any) {
    if (event.target.checked) {
      this.idLoan = loan.id;
      console.log(`ID de préstamo seleccionado: ${this.idLoan}`);
    } else {
      this.idLoan = 0;
    }
  }
  }


