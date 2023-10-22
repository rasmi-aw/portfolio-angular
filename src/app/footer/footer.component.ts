import {Component, Input} from '@angular/core';

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
}
