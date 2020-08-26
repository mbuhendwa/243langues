import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Bienvenu sur 243Langues!");
    this.meta.updateTag({
      name: "description",
      content: "Site d'apprentissage du Lingala. Apprenez la grammaire simplifiee du Lingala, la conjugaison, et le vocabulaire."
    })
  }

}
