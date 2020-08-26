import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private readonly collection: string = "lingala-lessons";

  constructor(private firestore: AngularFirestore) {}

  getTopLessons() {
    return this.firestore.collection(this.collection, ref => ref.where("is_top_lesson", "==", true))
    .get();
  }
  getRecentLessons() {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", true).limit(10))
    .get();
  }
  getRecentPosts() {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", true).limit(5))
    .get();
  }
  getHomeMainLesson() {
    return this.firestore.collection(this.collection, ref => ref.where("isHomeLesson", "==", true))
    .get();
  }
  getContentTable(){
    return this.firestore
      .collection(this.collection)
      .doc('table-of-contents')
      .get();
  }

  getLesson(id: string){
    return this.firestore
      .collection(this.collection)
      .doc(id)
      .get();
  }

  updateLesson(lesson: DocumentData){
    return this.firestore.collection(this.collection)
      .doc(lesson.id)
      .set(
        {
          title: lesson.title,
          description: lesson.description,
          content: lesson.content
        },
        { merge: true }
      );
  }

  createLesson(lesson: DocumentData) {
    return this.firestore.doc(`${this.collection}/${lesson.id}`)
      .set(lesson);
  }
}
