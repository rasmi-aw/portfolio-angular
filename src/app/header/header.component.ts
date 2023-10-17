import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string | undefined;
  job: string | undefined;
  linkGithub: string | undefined;
  linkFacebook: string | undefined;
  linkInstagram: string | undefined;
  linkTwitter: string | undefined;

  constructor() {
  }

  ngOnInit() {
    this.name = "Abdelouadoud Rasmi"
    this.job = "Java developper"
    this.linkGithub = "https://github.com/rasmi-aw"
    this.linkFacebook = "https://github.com/rasmi-aw"
    this.linkInstagram = "https://github.com/rasmi-aw"
    this.linkTwitter = "https://github.com/rasmi-aw"
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
