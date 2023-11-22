import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login.service';


export const authGuard = () =>{
  const loginService = inject(LoginServiceService)
  const router = inject(Router)
  console.log('Can Activate called');
       if (loginService.isLoggedIn()) {
         console.log('User is logged in, redirecting to /home'); 
         return true;
       } else {
         console.log('User is not logged in, redirecting to /login');
         router.navigate(['/login']);
        return false;
       }
}
