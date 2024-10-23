import { NgModule } from '@angular/core';

import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    ReservationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReservationModule { }
