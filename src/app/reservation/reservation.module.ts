import { NgModule } from '@angular/core';

import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ListReservationsComponent } from './components/list-reservations/list-reservations.component';


@NgModule({
  declarations: [
    ListReservationsComponent
  ],
  imports: [
    ReservationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReservationModule { }
