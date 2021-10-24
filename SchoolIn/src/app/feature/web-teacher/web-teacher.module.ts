import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebTeacherRoutingModule } from './web-teacher-routing.module';
import { StudentProgressDetailsComponent } from './student-progress-details/student-progress-details.component';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    StudentProgressDetailsComponent
  ],
  imports: [
    CommonModule,
    WebTeacherRoutingModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({})
  ],
})
export class WebTeacherModule { }
