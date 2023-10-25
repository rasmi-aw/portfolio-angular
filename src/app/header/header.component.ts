import {Component, Input, OnInit} from '@angular/core';
import {state, style, transition, animate, trigger} from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('zoomin', [
      state('start', style({width: "0px", height: "0px"})),
      state('end', style({width: "100px", height: "100px"})),
      transition("start => end", [
        animate("2s")
      ])
    ])
  ]
})
export class HeaderComponent {
  @Input() fullname: string | undefined;
  @Input() job: string | undefined;
  @Input() linkGithub: string | undefined;
  @Input() linkFacebook: string | undefined;
  @Input() linkInstagram: string | undefined;
  @Input() linkTwitter: string | undefined;

  constructor() {
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
