import { Component, OnInit } from '@angular/core';

const data: any[] = [
  { data: [1, 2, 3, 4, 5, 6, 7], label: 'my label 1' },
  { data: [11, 22, 33, 14, 35, 26, 17], label: 'my label 2' }
];

const labels: string[] = [ 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = data;
  public barChartLabels: string[] = labels;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
  }

}
