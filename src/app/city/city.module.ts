import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityFormComponent } from './city-form/city-form.component';


@NgModule({
  declarations: [CityListComponent, CityFormComponent],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
