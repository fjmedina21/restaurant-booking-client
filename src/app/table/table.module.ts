import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ListTablesComponent } from './components/list-tables/list-tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTableComponent } from './components/addTable/addTable.component';
import { DateTimePickerModule, MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    ListTablesComponent,
    AddTableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    DateTimePickerModule
  ],
  providers: [MaskedDateTimeService]
})
export class TableModule { }
