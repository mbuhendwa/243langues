import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-course-contents',
  templateUrl: './course-contents.component.html',
  styleUrls: ['./course-contents.component.css']
})
export class CourseContentsComponent implements OnInit {
  // lessons:any;

  // getContents = () => this.lessonService.getContentTable().subscribe(response => (this.lessons = response.data().i));

  constructor() { }

  ngOnInit(): void {
    // this.getContents();
  }

}
