import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { LayoutPageComponent } from '../shared/layout/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: ListStaffComponent },
      { path: '**', redirectTo: '/' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
