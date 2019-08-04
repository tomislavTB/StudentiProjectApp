import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


const routes: Routes = [
  { path: 'teacher', component: TeacherListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
