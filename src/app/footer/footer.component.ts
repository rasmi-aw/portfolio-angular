import {Component, Input} from '@angular/core';
import {NavigationService} from "../navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() fullname: string | undefined;
  @Input() job: string | undefined;
  @Input() linkGithub: string | undefined;
  @Input() linkFacebook: string | undefined;
  @Input() linkInstagram: string | undefined;
  @Input() linkTwitter: string | undefined;

  constructor(private navigationService: NavigationService) {
  }

  sendEmail($event: any) {
    alert($event)
  }


  toAbout(): void {
    this.navigationService.to("about")
  }
}
