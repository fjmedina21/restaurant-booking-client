import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListStaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StaffModule { }
