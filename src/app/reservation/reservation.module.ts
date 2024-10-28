import { NgModule } from '@angular/core';

import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ListReservationsComponent } from './components/list-reservations/list-reservations.component';
import { CommonModule } from '@angular/common';
import { ChangeStatusgComponent } from './components/change-status/change-status.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    ListReservationsComponent,
    ChangeStatusgComponent,
    AddReservationComponent
  ],
  exports: [AddReservationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    SharedModule,
    MaterialModule,
    DateTimePickerModule
  ]
})
export class ReservationModule { }
