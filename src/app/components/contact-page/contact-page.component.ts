import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  options: Array<any> = [
    'Suggestion',
    'Other reasons'
  ];
  contact_success: Boolean = true;
  message: any = { success: "Successfully sent email.", error: "Failed to send message!" };

  constructor() { }

  ngOnInit(): void {
  }

}
