import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', "Others"];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 236],
    [123, 52, 33, 127]
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
    },
    {
      backgroundColor: [
        "#9E837E",
        "#FF694F",
        "#DB6F5C",
        "#1F8F5F",
        "#5CDBA5"
      ]
    }
  ];

}
