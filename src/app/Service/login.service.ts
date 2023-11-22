import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private readonly cookieService = inject(CookieService)
  private readonly httpClient = inject(HttpClient)
  private loginUrl = 'http://localhost:8080/api/login';

  login(dni: string, password: string) {
    let params = new URLSearchParams();
    params.set('dni', dni);
    params.set('password', password);

    const headers = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');

    return this.httpClient.post<any>(this.loginUrl, params.toString(), { 
      headers,
      observe: 'response',
      withCredentials: true 
    })
       .pipe(
         tap(() => {
           const cookies = document.cookie.split(';');
           console.log(cookies);
           cookies.forEach(cookie => {
             const cookieParts = cookie.split('=');
             const cookieName = cookieParts[0].trim();
             const cookieValue = cookieParts[1];
             if (cookieName === 'JSESSIONID') {
               console.log("hola");
               this.cookieService.set('JSESSIONID', cookieValue); 
             }
           });
         })
       );
  }
  isLoggedIn(): boolean {
    return this.cookieService.check('JSESSIONID');
  }
}
