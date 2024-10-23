import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLogged, IsNotLogged } from './guards/auth.guard';
import { IsAdmin } from './guards/role.guard';
import { sessionExp } from './guards/sesionExp.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [IsLogged],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
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
  {
    path: 'staff',
    canActivate: [IsNotLogged, sessionExp],
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
