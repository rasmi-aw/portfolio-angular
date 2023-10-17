import {Component, OnInit} from '@angular/core';
import {Portfolio} from "./portfolio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Protfolio';
  portfolio: Portfolio | undefined;

  ngOnInit() {
    this.portfolio = {
      fullname: "Abdelouadoud Rasmi",
      job: "Java developer",
      description: "",
      projects: []
    }
  }
}
