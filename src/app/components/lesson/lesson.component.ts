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
  getLesson = (title: string) => this.lessonService.getLessonFromTitle(title).subscribe(response => (this.lesson = response.docs[0].data()));

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLesson(this.route.snapshot.params.title.replace(/-/g, ' '));
  }

}
