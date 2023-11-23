import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './Service/authentication.service';
import { LoansComponent } from './loanInformation-Pay/loans.component';
import { CardComponent } from './card/card.component';
import { OperationsComponent } from './operations/operations.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoanComponent } from './addLoan/loan.component';

const routes: Routes = [ 
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'loans', component: LoansComponent, canActivate: [authGuard]},
  { path: 'cards', component: CardComponent, canActivate: [authGuard]},
  { path: 'operations', component: OperationsComponent, canActivate: [authGuard]},
  { path: 'sidebar', component: SidebarComponent, canActivate: [authGuard]},
  { path: 'addLoan', component: LoanComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
