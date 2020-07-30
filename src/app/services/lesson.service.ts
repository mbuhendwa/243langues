import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private readonly collection: string = "lingala-lessons";

  constructor(private firestore: AngularFirestore, private router: Router) {}

  getLesson(id: string){
    return this.firestore
      .collection(this.collection)
      .doc(id)
      .get()
  }
  // get lesson from title
  getLessonFromTitle(title: string){
    return this.firestore
      .collection(this.collection, ref => { return ref.where("title", "==", title) })
      .get()
  }

  // update lesson data
  updateLesson(lesson: DocumentData){
    return this.firestore.collection(this.collection)
      .doc(lesson.id)
      .set(
        { 
          title: lesson.title,
          content: lesson.content
        },
        { merge: true }
      )
  }

  createLesson(lesson: DocumentData) {
    return this.firestore.doc(`${this.collection}/${this.firestore.createId()}`)
      .set(lesson)
  }
}
