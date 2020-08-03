import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { ActivatedRoute } from '@angular/router';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface LessonNode {
  title: string;
  url?: string;
  chapters?: LessonNode[];
}

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonComponent implements OnInit {
  lesson: any;
  tableTreeControl = new NestedTreeControl<LessonNode>(node => node.chapters);
  contentTable = new MatTreeNestedDataSource<LessonNode>();

  hasChild = (_: number, node: LessonNode) => !!node.chapters && node.chapters.length > 0;
  
  getLesson = (id: string) => this.lessonService.getLesson(id).subscribe(response => (this.lesson = response.data()));
  getTable = () => this.lessonService.getContentTable().subscribe(response => (this.contentTable.data = response.data().i));

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLesson(this.route.snapshot.params.id);
    this.getTable();
  }

}
