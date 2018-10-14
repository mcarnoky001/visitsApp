import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  single: any[] = [
    {
      name: "1 visit",
      value: 14830
    },
    {
      name: "2-4 visit",
      value: 22345
    },
    {
      name: "5-15 visits",
      value: 10125
    },
    {
      name: "16+ visits",
      value: 2356
    }
  ];
  multi: any[] = [
  {
    "name": "Direct",
    "series": [
      {
        "name": "1",
        "value": 47
      },
      {
        "name": "2",
        "value": 5
      }
    ]
  },
  ];
  lineChart: any[] = [
  {
    name: 'session_start',
    series: [
      {
        name: new Date(2017, 2, 1, 2, 34, 17),
        value: 5
      },
      {
        name: new Date(2017, 2, 4, 2, 34, 17),
        value: 20      },
      {
        name: new Date(2017, 2, 8, 2, 34, 17),
        value: 50
      },
      {
        name: new Date(2017, 2, 8, 2, 34, 17),
        value: 55
      }
      ,
      {
        name: new Date(2017, 2, 10, 2, 34, 17),
        value: 45
      }
      ,
      {
        name: new Date(2017, 2, 12, 2, 34, 17),
        value: 40
      }
      ,
      {
        name: new Date(2017, 2, 14, 2, 34, 17),
        value: 38
      }
      ,
      {
        name: new Date(2017, 2, 16, 2, 34, 17),
        value: 58
      },
      {
        name: new Date(2017, 2, 20, 2, 34, 17),
        value: 59
      }
      ,
      {
        name: new Date(2017, 2, 24, 2, 34, 17),
        value: 55
      }
    ]
  },
  {
    name: 'session_end',
    series: [
      {
        name: new Date(2017, 2, 1, 2, 34, 17),
        value: 4
      },
      {
        name: new Date(2017, 2, 4, 2, 34, 17),
        value: 17
      },
      {
        name: new Date(2017, 2, 8, 2, 34, 17),
        value: 45
      }
      ,
      {
        name: new Date(2017, 2, 10, 2, 34, 17),
        value: 35
      }
      ,
      {
        name: new Date(2017, 2, 12, 2, 34, 17),
        value: 30
      }
      ,
      {
        name: new Date(2017, 2, 14, 2, 34, 17),
        value: 28
      }
      ,
      {
        name: new Date(2017, 2, 16, 2, 34, 17),
        value: 40
      },
      {
        name: new Date(2017, 2, 20, 2, 34, 17),
        value: 45
      }
      ,
      {
        name: new Date(2017, 2, 24, 2, 34, 17),
        value: 35
      }
    ]
  },
  {
    name: 'app_action',
    series: [
      {
        name: new Date(2017, 2, 1, 2, 34, 17),
        value: 75
      },
      {
        name: new Date(2017, 2, 4, 2, 34, 17),
        value: 150
      },
      {
        name: new Date(2017, 2, 8, 2, 34, 17),
        value: 200
      },
      {
        name: new Date(2017, 2, 10, 2, 34, 17),
        value: 170
      }
      ,
      {
        name: new Date(2017, 2, 12, 2, 34, 17),
        value: 160
      }
      ,
      {
        name: new Date(2017, 2, 14, 2, 34, 17),
        value: 150
      }
      ,
      {
        name: new Date(2017, 2, 16, 2, 34, 17),
        value: 180}
      ,
      {
        name: new Date(2017, 2, 20, 2, 34, 17),
        value: 190
      }
      ,
      {
        name: new Date(2017, 2, 24, 2, 34, 17),
        value: 170
      }
    ]
  }
];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showLegend2 = true;
  showXAxisLabel = true;
  xAxisLabel = "";
  showYAxisLabel = true;
  yAxisLabel = "";
  yAxisLabel2 = "Events";
  autoScale = true;
  timeline = false;

  animations = true;
  gaugeMin: number = 0;
  gaugeMax: number = 100;
  gaugeLargeSegments: number = 10;
  gaugeSmallSegments: number = 5;
  gaugeTextValue: string = '';
  gaugeUnits: string = "";
  gaugeAngleSpan: number = 240;
  gaugeStartAngle: number = -120;
  gaugeShowAxis: boolean = true;
  gaugeValue: number = 66; // linear gauge value

  colorScheme = {
    domain: ["#f7cd45", "#4db3d6", "#7166ea", "#de59a1"]
  };

  onSelect(event) {
    console.log(event);
  }

}
