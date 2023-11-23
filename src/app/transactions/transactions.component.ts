import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Service/client.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  client: Client = new Client()
  constructor(private clientService: ClientService) {}

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

}
