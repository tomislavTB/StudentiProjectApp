import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutorListComponent } from './executor-list/executor-list.component';
import { ExecutorFormComponent } from './executor-form/executor-form.component';


const routes: Routes = [
  { path: 'executor', component: ExecutorListComponent },
  { path: 'executor/new', component: ExecutorFormComponent },
  { path: 'executor/:id', component: ExecutorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutorRoutingModule { }
