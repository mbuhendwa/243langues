import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  // options: Array<any> = [
  //   'Suggestion',
  //   'Other reasons'
  // ];
  // contact_success: Boolean = true;
  // message: any = { success: "Successfully sent email.", error: "Failed to send message!" };

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Contact - 243Langues");
    this.meta.updateTag({name: "description", content: "Contactez 243Langues pour toutes suggestions, commentaires, avis,... par email. Envoyez un email à contact@243langues.org."})
  }

}
