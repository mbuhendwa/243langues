import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonComponent implements OnInit {
  lesson: any;
  isLessonNotFound: Boolean = false;
  
  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLesson(this.route.snapshot.params.id);
  }

  getLesson = (id: string) => {
    this.lessonService.getLesson(id).subscribe(response => (this.onGetLessonComplete(response.data())));
  }
  onGetLessonComplete = (lesson: any) => {
    this.lesson = lesson;
    if(!lesson) this.isLessonNotFound = true;
  }
  currentURL(){
    return document.URL;
  }

}
