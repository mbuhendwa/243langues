import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-course-contents',
  templateUrl: './course-contents.component.html',
  styleUrls: ['./course-contents.component.css']
})
export class CourseContentsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Table de matières - Lingala");
    this.meta.updateTag({ name: "descrition", content: "Table de matières du cours de grammaire du Lingala. Introduction au cours, Notions de Base, Phrases et propositions, Les Parties du discours, Conjugaison des Verbes Lingala, Bibliographie,..." })
  }

}
