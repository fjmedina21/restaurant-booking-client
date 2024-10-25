import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/internal/operators/filter';
import { ChangePasswordComponent } from 'src/app/auth/components/change-password/change-password.component';
import { Staff } from '../interfaces/defaultdata.interface';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'shared-layout',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent implements OnInit {

  loggedUser!: Staff;
  currentUserRoles!: string;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
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
    const dialogRef = this.dialog.open(ChangePasswordComponent, { disableClose: true });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
      ).subscribe();
  }

}
