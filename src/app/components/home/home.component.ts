import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { DocumentData, QueryDocumentSnapshot } from '@angular/fire/firestore';

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
  
  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.getHomeLesson();
    this.getRecentLessons();
    this.getRecentPosts();
    this.getTopLessons();
  }

}
