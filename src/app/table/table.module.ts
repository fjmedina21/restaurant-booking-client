import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    TableRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TableModule { }
