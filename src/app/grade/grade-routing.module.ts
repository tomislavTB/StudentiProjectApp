import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeListComponent } from './grade-list/grade-list.component';


const routes: Routes = [
  { path: 'grade', component: GradeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
