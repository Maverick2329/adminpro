import { Component, Input } from '@angular/core';

// import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin Titulo';
  @Input('labels') public doughnutChartLabels: Label[] = ['Label-1', 'Label-2', 'Label-3'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  // public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];

}
