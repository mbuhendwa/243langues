import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { CourseContentsComponent } from './components/course-contents/course-contents.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table-des-matieres', component: CourseContentsComponent },
  { path: 'lesson/:id', component: LessonComponent },
  { path: 'blog/:type', component: LessonListComponent },
  { path: 'editor/new-lesson', component: EditorComponent },
  { path: 'edit/lesson/:id', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
