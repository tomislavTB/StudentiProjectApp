import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutorRoutingModule } from './executor-routing.module';
import { ExecutorListComponent } from './executor-list/executor-list.component';


@NgModule({
  declarations: [ExecutorListComponent],
  imports: [
    CommonModule,
    ExecutorRoutingModule
  ]
})
export class ExecutorModule { }
