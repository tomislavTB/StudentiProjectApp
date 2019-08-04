import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeListComponent } from './grade-list/grade-list.component';


@NgModule({
  declarations: [GradeListComponent],
  imports: [
    CommonModule,
    GradeRoutingModule
  ]
})
export class GradeModule { }
