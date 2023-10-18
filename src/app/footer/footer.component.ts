import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
}
