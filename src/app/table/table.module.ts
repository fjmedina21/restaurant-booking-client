import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ListTablesComponent } from './components/list-tables/list-tables.component';


@NgModule({
  declarations: [
    ListTablesComponent
  ],
  imports: [
    TableRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TableModule { }
