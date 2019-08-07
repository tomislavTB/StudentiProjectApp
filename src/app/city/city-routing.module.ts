import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityFormComponent } from './city-form/city-form.component';


const routes: Routes = [
  { path: 'city', component: CityListComponent },
  { path: 'city/new', component: CityFormComponent },
  { path: 'city/:id', component: CityFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
