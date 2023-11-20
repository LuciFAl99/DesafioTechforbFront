import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loginUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  login(dni: string, password: string) {
    let params = new HttpParams()
      .set('dni', dni)
      .set('password', password);

    return this.http.post<any>(this.loginUrl, null, { params });
  }
}
