import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeListComponent } from './college-list/college-list.component';


const routes: Routes = [
  { path: 'college', component: CollegeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }
