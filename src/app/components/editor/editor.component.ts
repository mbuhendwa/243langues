import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentData } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit {
  lesson: DocumentData;
  id: string = this.route.snapshot.params.id;
  is_new: Boolean = false;
  is_update: Boolean = false;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.id) {
      this.is_update = true;
      this.getLesson();
    }
    else this.lesson = { id: null, title: null, content: null, published_date: null }
  }

  // DB functions
  getLesson(){
    this.lessonService.getLesson(this.id).subscribe(response => (this.lesson = response.data()));
  }
  createLesson(){
    var id = this.lesson.id;
    delete this.lesson.id;
    this.lesson.published_date = firebase.firestore.Timestamp.now();
    this.lessonService
      .createLesson(this.lesson, id)
      .then(() => { return this.router.navigate([`/lesson/${id}`]) })
      .catch(response => { console.error("Error writing document: ", response); });
  }
  updateLesson(){
    var id = this.lesson.id;
    delete this.lesson.id;
    this.lessonService
      .updateLesson(this.lesson, id)
      .then(() => { return this.router.navigate([`/lesson/${id}`]) })
      .catch(response => { console.error("Error writing document: ", response); });
  }
  updateField(field: string, val: string){
    this.lesson[field] = val;
  }
}
