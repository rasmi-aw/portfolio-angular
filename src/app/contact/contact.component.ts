import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  email = "Email"
  fullname = "Fullname"
  msg = "Message"
  @Output() emailChangedEvent= new EventEmitter<string>();

  ngOnInit(): void {

  }

  sendEmail(input: any) {
    this.emailChangedEvent.emit(input.email)
  }

}
