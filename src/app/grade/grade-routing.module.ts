import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeFormComponent } from './grade-form/grade-form.component';


const routes: Routes = [
  { path: 'grade', component: GradeListComponent },
  { path: 'grade/new', component: GradeFormComponent },
  { path: 'grade/:id', component: GradeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
