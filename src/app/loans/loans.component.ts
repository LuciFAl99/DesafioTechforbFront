import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Service/ClientService';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  client: Client = new Client();

  constructor(private clientService: ClientService) { }

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

  data = [
    { amount: '$800,000', installments: 'Cuenta 24', issueDate: '24 Marzo, 2022', monthly: '$3,000', status: 'Pagar', selected: false },
    { amount: '$500,000', installments: 'Cuenta 24', issueDate: '24 Marzo, 2022', monthly: '$3,000', status: 'Cancelado', selected: false },
  ];

  toggleSelection(item: any) {
    item.selected = !item.selected;
  }

  selectAll(event: any) {
    const checked = event.target.checked;
    this.data.forEach(item => item.selected = checked);
  }
}
