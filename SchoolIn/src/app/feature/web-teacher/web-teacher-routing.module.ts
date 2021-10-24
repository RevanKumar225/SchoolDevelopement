import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProgressDetailsComponent } from './student-progress-details/student-progress-details.component';

const routes: Routes = [
  {path:"studentProgress",component:StudentProgressDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebTeacherRoutingModule { }
