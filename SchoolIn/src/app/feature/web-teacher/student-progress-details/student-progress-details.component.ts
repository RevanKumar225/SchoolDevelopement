import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CoolService } from 'src/app/cool/cool.service';

@Component({
  selector: 'app-student-progress-details',
  templateUrl: './student-progress-details.component.html',
  styleUrls: ['./student-progress-details.component.css']
})
export class StudentProgressDetailsComponent implements OnInit {
  progressBar = document.querySelector('.progress-bar');
  intervalId:any;
  progress = 0;
  titleFontSize = "24";
  unitsFontSize = "24";
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private coolService: CoolService) { }

  ngOnInit() {
    this.coolService.getData().subscribe({
      next: coolItems => {
        coolItems.forEach(ci => {
          this.lineChartData[0].data?.push(ci.coolData);
          // .data.push(ci.coolData);
          this.lineChartLabels.push((new Date(ci.date)).toDateString());
        });
      },
      error: err => console.log(err)
    });

    const getDownloadProgress = () => {
      console.log('getDownload', this);
      if (this.progress <= 99) {
        console.log('inside if', this.progress);
        this.progress = this.progress + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

