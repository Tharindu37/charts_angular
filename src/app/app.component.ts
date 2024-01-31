import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //angular-highcharts --> not work
  title = 'charts_angular';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 10, 20, 5, 4, 3],
      },
    ],
  };

  // lineChart = new Chart({
  //   chart: {
  //     type: 'line',
  //   },
  //   title: {
  //     text: 'Patients',
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   series: [
  //     {
  //       name: 'Patients admitted',
  //       data: [10, 2, 3, 4, 7, 18, 20, 2, 20, 39],
  //     } as any,
  //   ],
  // });

  // pieChart = new Chart({
  //   chart: {
  //     type: 'pie',
  //     plotShadow: false,
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   plotOptions: {
  //     pie: {
  //       innerSize: '99%',
  //       borderWidth: 10,
  //       borderColor: '',
  //       slicedOffset: 10,
  //       dataLabels: {
  //         connectorWidth: 0,
  //       },
  //     },
  //   },
  //   title: {
  //     verticalAlign: 'middle',
  //     floating: true,
  //     text: 'Diseases',
  //   },
  //   legend: {
  //     enabled: false,
  //   },
  //   series: [
  //     {
  //       type: 'pie',
  //       data: [
  //         { name: 'COVID 19', y: 1, color: '#eeeeee' },
  //         { name: 'HIV/AIDS', y: 2, color: '#393e46' },
  //         { name: 'EBOLA', y: 3, color: '#00adb5' },
  //         { name: 'DISPORA', y: 4, color: '#eeeeee' },
  //         { name: 'DIABETES', y: 5, color: '#506ef9' },
  //       ],
  //     },
  //   ],
  // });
}
