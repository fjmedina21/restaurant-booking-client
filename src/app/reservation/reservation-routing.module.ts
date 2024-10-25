import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReservationsComponent } from './components/list-reservations/list-reservations.component';
import { LayoutPageComponent } from '../shared/layout/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: ListReservationsComponent },
      { path: '**', redirectTo: '/' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
