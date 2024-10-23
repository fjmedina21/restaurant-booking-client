import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ListStaffComponent } from './components/list-staff/list-staff.component';


@NgModule({
  declarations: [
    ListStaffComponent
  ],
  imports: [
    StaffRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StaffModule { }
