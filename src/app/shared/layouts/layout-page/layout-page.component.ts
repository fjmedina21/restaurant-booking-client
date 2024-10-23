import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs/internal/operators/filter';
import { ChangePasswordgComponent } from 'src/app/auth/components/change-password/change-password.component';
import { User } from '../../interfaces/defaultdata.interface';

@Component({
  selector: 'shared-layout',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent implements OnInit {

  loggedUser!: User;
  currentUserRoles!: string;

  public sidebarItems = [
    { label: 'Dashboard', icon: 'dashboard', url: '/dashboard', },
    { label: 'Reservaciones', icon: 'person', url: '/reservaciones', },
    { label: 'Mesas', icon: 'person', url: '/mesas', },
    { label: 'Staff', icon: 'person', url: '/staff', },
  ];

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.currentUserRoles = this.authService.getRole();
  }

  logout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: "Sign Out", message: "Are you sure?" } });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        filter((logout: boolean) => logout),
      ).subscribe(
        () => this.authService.logout());

  }

  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordgComponent, { disableClose: true });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
      ).subscribe();
  }

}
