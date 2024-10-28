import { GenrePipe } from './pipes/genre.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OkDialogComponent } from './components/ok-dialog/ok-dialog.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { AgePipe } from './pipes/age.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LayoutPageComponent } from './layout/layout-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    OkDialogComponent,
    GenrePipe,
    BooleanPipe,
    AgePipe,
    SearchBoxComponent
  ],
  exports: [
    SearchBoxComponent,
    LayoutPageComponent,
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    OkDialogComponent,
    GenrePipe,
    BooleanPipe,
    AgePipe,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  imports: [
    RouterModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()]
})
export class SharedModule { }
