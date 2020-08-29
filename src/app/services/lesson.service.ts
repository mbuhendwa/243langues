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
    return this.firestore.collection(this.collection, ref => ref.where("is_top_lesson", "==", true).orderBy("published_date", "desc"))
    .get();
  }
  prevLessons(first: DocumentData, is_post: Boolean, limit: number = 10) {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", is_post).orderBy("published_date", "desc").endBefore(first))
    .get();
  }
  getLessons(is_post: Boolean, limit: number = 10) {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", is_post).orderBy("published_date", "desc").limit(limit))
    .get();
  }
  nextLessons(last: DocumentData, is_post: Boolean, limit: number = 10) {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", is_post).orderBy("published_date", "desc").startAfter(last).limit(limit))
    .get();
  }
  getRecentLessons(limit: number = 5) {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", false).orderBy("published_date", "desc").limit(limit))
    .get();
  }
  getRecentPosts(limit: number = 5) {
    return this.firestore.collection(this.collection, ref => ref.where("is_post", "==", true).orderBy("published_date", 'desc').limit(limit))
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
    lesson.is_post = Boolean(lesson.is_post);
    return this.firestore.collection(this.collection)
      .doc(lesson.id)
      .set(
        lesson,
        { merge: true }
      );
  }

  createLesson(lesson: DocumentData) {
    return this.firestore.doc(`${this.collection}/${lesson.id}`)
      .set(lesson);
  }
}
