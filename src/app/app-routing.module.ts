import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLogged, IsNotLogged } from './guards/auth.guard';
import { sessionExp } from './guards/sesionExp.guard';
import { AddReservationComponent } from './reservation/components/add-reservation/add-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: AddReservationComponent
  },
  {
    path: 'auth',
    canActivate: [IsLogged],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
/*   {
    path: 'home',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, */
  {
    path: 'reservations',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  },
  {
    path: 'tables',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
/*   {
    path: 'staff',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
  }, */
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
