import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebTeacherRoutingModule } from './web-teacher-routing.module';
import { StudentProgressDetailsComponent } from './student-progress-details/student-progress-details.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    StudentProgressDetailsComponent
  ],
  imports: [
    CommonModule,
    WebTeacherRoutingModule,
    ChartsModule
  ]
})
export class WebTeacherModule { }
