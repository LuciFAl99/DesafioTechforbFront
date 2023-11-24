import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { ClientService } from '../Service/client.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
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
