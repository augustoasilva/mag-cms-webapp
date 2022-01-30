import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {CoursesComponent} from './courses/courses.component';
import {StudentsComponent} from './students/students.component';
import {TeachersComponent} from './teachers/teachers.component';
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TitleComponent} from './title/title.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientModule} from "@angular/common/http";
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    CoursesComponent,
    StudentsComponent,
    StudentComponent,
    TeachersComponent,
    DashboardComponent,
    NavbarComponent,
    TitleComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
