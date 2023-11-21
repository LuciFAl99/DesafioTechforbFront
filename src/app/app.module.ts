import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { BalanceComponent } from './balance/balance.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoansComponent } from './loans/loans.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    BalanceComponent,
    TransactionsComponent,
    LoansComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
