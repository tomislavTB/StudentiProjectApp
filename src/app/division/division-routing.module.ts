import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionListComponent } from './division-list/division-list.component';
import { DivisionFormComponent } from './division-form/division-form.component';


const routes: Routes = [
  { path: 'division', component: DivisionListComponent },
  { path: 'division/new', component: DivisionFormComponent },
  { path: 'division/:id', component: DivisionFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
