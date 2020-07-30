import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lesson/:title', component: LessonComponent },
  { path: 'editor/new-lesson', component: EditorComponent },
  { path: 'edit/lesson/:id', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
