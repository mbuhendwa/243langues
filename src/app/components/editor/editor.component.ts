import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit {
  lesson: DocumentData;
  is_new: Boolean = false;

  getLesson = (title: string) => this.lessonService.getLesson(title).subscribe(response => (this.lesson = response.docs[0].data()));

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLesson(this.route.snapshot.params.title.replace(/-/g, ' '));
  }
  updateContent(val){
    this.lesson.content = val;
  }
}
