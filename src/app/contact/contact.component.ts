import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email = "Email"
  fullname = "Fullname"
  msg = "Message"
  ngOnInit(): void {

  }

  sendEmail(input: any) {
  }

}
