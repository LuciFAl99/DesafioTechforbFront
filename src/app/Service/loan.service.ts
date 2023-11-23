import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private URL = 'http://localhost:8080/api/loans';

  constructor(private http: HttpClient) { }

  public getLoans(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = {
      withCredentials: true,
      headers: headers
    };

    return this.http.get<any>(this.URL, options);
  }
}
