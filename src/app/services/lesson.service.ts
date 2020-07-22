import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private firestore: AngularFirestore) { }

  getLesson(title: string){
    return this.firestore
      .collection("lingala-lessons", ref => { return ref.where("title", "==", title) })
      .get()
  }
}
