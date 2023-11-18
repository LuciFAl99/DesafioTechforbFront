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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    BalanceComponent,
    TransactionsComponent,
    LoansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
