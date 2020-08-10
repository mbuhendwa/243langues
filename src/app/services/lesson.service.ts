import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private readonly collection: string = "lingala-lessons";

  constructor(private firestore: AngularFirestore) {}

  getContentTable(){
    return this.firestore
      .collection(this.collection)
      .doc('table-of-contents')
      .get()
  }

  getLesson(id: string){
    return this.firestore
      .collection(this.collection)
      .doc(id)
      .get()
  }

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
    return this.firestore.doc(`${this.collection}/${lesson.id}`)
      .set(lesson)
  }
}
