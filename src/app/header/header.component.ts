import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
