import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string | undefined;

  constructor() {
  }

  ngOnInit() {
    this.name = "Abdelouadoud Rasmi"
  }

  descriptionClicker($event: any) {
    alert("description card clicked")
    console.log("description card clicked");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

}
