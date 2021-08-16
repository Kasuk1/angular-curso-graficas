import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', "Others"
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 236]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        "#8F897C",
        "#FFB726",
        "#DBB25D",
        "#1F4C8F",
        "#5C8FDB"
      ]
    }
  ]

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    /* this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        const labels = Object.keys(data);
        this.doughnutChartLabels = labels;

        const values = Object.values(data);
        this.doughnutChartData.push(values);
      }); */

      this.graficasService.getUsuariosRedesSocialesDonaData()
        .subscribe(({labels, values}) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
        })


  }

}
