import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class HomeModule { }
