import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Balance',
      align: 'left'
    },
    xAxis: {
      categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], 
      crosshair: true,
      labels: {
        style: {
          fontSize: '12px', 
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      min: 0,
      tickInterval: 10, 
      title: {
        text: 'Dinero'
      }
    },
    legend: {
      align: 'center',
      verticalAlign: 'top' 
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.change}%)<br/>'
        }
      }
    },
    series: [
      {
        type: 'column',
        name: 'Esta semana',
        data: [10, 20, 30, 40, 50] 
      },
      {
        type: 'column',
        name: 'Semana pasada',
        data: [15, 25, 35, 45, 55] 
      }
    ]
  };
  };



