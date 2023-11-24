import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private URL = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = {
      withCredentials: true,
      headers: headers
    };

    return this.http.get<any>(this.URL, options);
  }
}
