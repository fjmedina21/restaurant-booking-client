import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTablesComponent } from './components/list-tables/list-tables.component';
import { LayoutPageComponent } from '../shared/layout/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: ListTablesComponent },
      { path: '**', redirectTo: '/' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
