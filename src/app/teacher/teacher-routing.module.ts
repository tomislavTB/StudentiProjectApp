import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';


const routes: Routes = [
  { path: 'teacher', component: TeacherListComponent },
  { path: 'teacher/new', component: TeacherFormComponent },
  { path: 'teacher/:id', component: TeacherFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
