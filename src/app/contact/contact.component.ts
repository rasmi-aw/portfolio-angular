import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fullname = "Fullname"
  email = "Email"
  content = "Content"

  ngOnInit(): void {

  }

  sendEmail(input: any) {
    alert(JSON.stringify(input))
  }

}
