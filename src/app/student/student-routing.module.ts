import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  { path: 'student', component: StudentListComponent },
  { path: 'student/new', component: StudentFormComponent },
  { path: 'student/:id', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
