import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TeachersComponent} from "./teachers/teachers.component";
import {StudentsComponent} from "./students/students.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CoursesComponent} from "./courses/courses.component";
import {SubjectsComponent} from "./subjects/subjects.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'subjects', component: SubjectsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
