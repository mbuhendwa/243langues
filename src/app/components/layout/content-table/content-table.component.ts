import { Component, OnInit, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { LessonService } from 'src/app/services/lesson.service';

interface LessonNode {
  title: string;
  url?: string;
  chapters?: LessonNode[];
}

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  @Input() isNumberedList: Boolean;
  tableTreeControl = new NestedTreeControl<LessonNode>(node => node.chapters);
  contentTable = new MatTreeNestedDataSource<LessonNode>();
  keys: Array<any> = [1,2,3,4];

  constructor(private lessonService: LessonService) { }

  hasChild = (_: number, node: LessonNode) => !!node.chapters && node.chapters.length > 0;
  
  getTable = () => this.lessonService.getContentTable().subscribe(response => (this.contentTable.data = response.data().i));

  ngOnInit(): void {
    this.getTable();
  }
}
