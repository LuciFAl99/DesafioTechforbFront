import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URL = 'http://localhost:8080/api/clients/current';

  constructor(private http: HttpClient) { }

  public getCurrentClient(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = {
      withCredentials: true,
      headers: headers
    };

    return this.http.get<any>(this.URL, options);
  }
}
