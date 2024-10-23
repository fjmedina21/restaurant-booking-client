import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutPageComponent } from '../shared/layout/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent,
    children: [
      { path: '', component:  DashboardComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
