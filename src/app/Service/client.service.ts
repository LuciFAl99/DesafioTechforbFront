import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URL = 'http://localhost:8080/api/clients/current';

  constructor(private http: HttpClient) { }

  public getCurrentClient(): Observable<Client>{
    return this.http.get<Client>(this.URL);
  }
}
