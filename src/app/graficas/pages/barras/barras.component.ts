import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: "#8F786D", hoverBackgroundColor: "#DB5201" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: "#FF9B69", hoverBackgroundColor: "#DB5201" },
    { data: [12, 36, 21, 97, 6, 12, 50], label: 'Series C', backgroundColor: "#44DBD1", hoverBackgroundColor: "#DB5201" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    this.barChartData.forEach(bar => {
      bar.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ]
    })

    // Only Change 3 values
    /* this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ]; */
  }

}
