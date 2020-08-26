import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { DocumentData, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeLesson: DocumentData;
  recentLessons: Array<QueryDocumentSnapshot<DocumentData>>;
  topLessons: Array<QueryDocumentSnapshot<DocumentData>>;
  recentPosts: Array<QueryDocumentSnapshot<DocumentData>>;

  getHomeLesson = () => this.lessonService.getHomeMainLesson().subscribe(response => (
    this.homeLesson = response.docs[0].data(),
    this.homeLesson['id'] = response.docs[0].id
  ));
  getRecentLessons = () => this.lessonService.getRecentLessons().subscribe(response => (
    this.recentLessons = response.docs
  ));
  getRecentPosts = () => this.lessonService.getRecentPosts().subscribe(response => (
    this.recentPosts = response.docs
  ));
  getTopLessons = () => this.lessonService.getTopLessons().subscribe(response => (
    this.topLessons = response.docs
  ));

  excerpt = (str: string) => str.substr(0, 120) + "...";
  
  constructor(
    private lessonService: LessonService,
    private title: Title,
    private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Bienvenu sur 243Langues!");
    this.meta.updateTag({
      name: "description",
      content: "Site d'apprentissage du Lingala. Apprenez la grammaire simplifiee du Lingala, la conjugaison, et le vocabulaire."
    });
    this.getHomeLesson();
    this.getRecentLessons();
    this.getRecentPosts();
    this.getTopLessons();
  }

}
