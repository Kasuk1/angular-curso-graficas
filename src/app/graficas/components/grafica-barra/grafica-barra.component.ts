import { Component, Input, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: "#8F786D", hoverBackgroundColor: "#DB5201" },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: "#FF9B69", hoverBackgroundColor: "#DB5201" },
    //{ data: [12, 36, 21, 97, 6, 12, 50], label: 'Series C', backgroundColor: "#44DBD1", hoverBackgroundColor: "#DB5201" }
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) {
      this.barChartType = "horizontalBar";
    }
  }

}
