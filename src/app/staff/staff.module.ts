import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    StaffRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StaffModule { }
