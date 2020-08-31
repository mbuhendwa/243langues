import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';
import { DocumentData } from '@angular/fire/firestore';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  type: string;
  page_index: number = 1;
  lessons: Array<DocumentData>;
  is_eol: boolean = false;

  getPreviousLessons(){
    this.lessonService.prevLessons(this.lessons[0], this.is_post_type()).subscribe(response => (this.lessons = response.docs, this.page_index -= this.lessons.length, this.is_eol = false));
  }
  initLessons(){
    this.lessonService.getLessons(this.is_post_type()).subscribe(response => (this.lessons = response.docs));
  }
  getNextLessons(){
    this.lessonService.nextLessons(this.lessons[this.lessons.length-1], this.is_post_type()).subscribe(response => {
      if(response.docs.length){
        this.page_index += this.lessons.length;
        this.lessons = response.docs;
      }
      else this.is_eol = true;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private lessonService: LessonService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params.type == 'posts'? 'Posts': 'Leçons';
    this.title.setTitle(`${this.type} Lingala - 243Langues`);
    this.meta.updateTag({name: "description", content: "Liste de toutes les leçons et blog posts sur le Lingala. Naviquez la liste de leçons et posts."})
    this.initLessons();
  }
  excerpt(str: string){
    return str.replace(/<\/?[^>]+>/ig, " ").substr(0, 500);
  }
  is_post_type(){
    return this.type == 'Posts';
  }

}
