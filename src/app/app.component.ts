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
      name: "Test1",
      value: 8940000
    },
    {
      name: "Test2",
      value: 5000000
    },
    {
      name: "Test3",
      value: 7200000
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Test Values";
  showYAxisLabel = true;
  yAxisLabel = "Value";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  onSelect(event) {
    console.log(event);
  }

}
