import { Component, Input,ElementRef , ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent  implements AfterViewInit{


  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() chartData: any = {};

  constructor(){

  }

  ngAfterViewInit(): void {
    if (this.canvas && this.canvas.nativeElement) {
      const ctx = this.canvas.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: this.chartData.data || {},
          options: this.chartData.options || {}
        });
      } else {
        console.error('Canvas context is null');
      }
    } else {
      console.error('Canvas reference is null or undefined');
    }
  }
 

}