import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Service/client.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoanService } from '../Service/loan.service';
import { Loan } from '../Model/loan';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  client: Client = new Client();
  loans: Loan[] = [];
  loanId: number = 0;
  amount: number = 0;
  payments: number = 0;
  destinationCardNumber: string = '';
  selectedLoan: Loan | undefined;
  filteredPayments: number[] = [];
  selectedPayment: number | null = null;


  constructor(private http: HttpClient, private loanService: LoanService, private clientService: ClientService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loanService.getLoans().subscribe(
      (data: Loan[]) => {
        this.loans = data;
        console.log(this.loans);
      },
      (error) => {
        console.error(error);
      }
    );

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

  onSubmit(): void {
    Swal.fire({
      title: '¿Estás seguro de solicitar el préstamo?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, solicitar préstamo'
    }).then((result) => {
      if (result.isConfirmed) {
        const loanApplicationDto = {
          loanId: this.selectedLoan?.id,
          amount: this.amount,
          payments: this.selectedPayment,
          destinationCardNumber: this.destinationCardNumber
        };

        const options = {
          withCredentials: true,
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.http.post('http://localhost:8080/api/loans', loanApplicationDto, options)
          .subscribe((response) => {
            console.log('Solicitud de préstamo enviada con éxito', response);
            Swal.fire({
              icon: 'success',
              text: 'Préstamo solicitado con éxito',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              this.fetchAndUpdateClientAndNavigate();
            });
          }, (error: HttpErrorResponse) => {
            console.error('Error en la transacción:', error);

            if (error.status === 201 && error.statusText === 'OK') {
              Swal.fire({
                icon: 'success',
                text: 'Solicitud realizada con éxito',
                showConfirmButton: false,
                timer: 2000
              }).then(() => {
                this.fetchAndUpdateClientAndNavigate();
              });
            } else {
              Swal.fire({
                icon: 'error',
                text: error.error.message || 'Ha ocurrido un error al solicitar el préstamo',
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
  loadPayments() {
    if (this.selectedLoan) {
      const foundLoan = this.loans.find(loan => loan.id === this.selectedLoan?.id);

      if (foundLoan && foundLoan.payments && foundLoan.payments.length > 0) {
        this.filteredPayments = foundLoan.payments;
      } else {
        this.filteredPayments = [];
      }
    } else {
      this.filteredPayments = [];
    }
    this.selectedPayment = null;
  }

}
