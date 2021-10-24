import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'feature', pathMatch: 'full' },
  { path: 'feature', loadChildren: () => import('./feature/web-teacher/web-teacher.module').then(m => m.WebTeacherModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
