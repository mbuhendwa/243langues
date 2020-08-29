import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AppComponent } from './app.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { EditorComponent } from './components/editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { CourseContentsComponent } from './components/course-contents/course-contents.component';
import { ContentTableComponent } from './components/layout/content-table/content-table.component';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EditorComponent,
    CourseContentsComponent,
    ContentTableComponent,
    LoaderComponent,
    Error404Component,
    LessonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTreeModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
