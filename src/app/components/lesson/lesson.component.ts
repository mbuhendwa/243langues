import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonComponent implements OnInit {
  lesson: any;
  isLessonNotFound: Boolean = false;
  
  constructor(
    private lessonService: LessonService,
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLesson(this.route.snapshot.params.id);
  }

  getLesson = (id: string) => {
    this.lessonService.getLesson(id).subscribe(response => (this.onGetLessonComplete(response.data())));
  }
  onGetLessonComplete = (lesson: any) => {
    this.lesson = lesson;
    this.title.setTitle(`${lesson.title} - Cours de Lingala`);
    this.meta.updateTag({ name: "description", content: lesson.description });
    if(!lesson) this.isLessonNotFound = true;
  }
  currentURL(){
    return document.URL;
  }

}
