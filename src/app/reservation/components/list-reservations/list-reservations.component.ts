import { filter, switchMap, tap } from 'rxjs';
import { Component, type OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from 'src/app/shared/interfaces/defaultdata.interface';
import { MatDialog } from '@angular/material/dialog';
import { ChangeStatusgComponent } from '../change-status/change-status.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss'],
})
export class ListReservationsComponent implements OnInit {

  reservations: Reservation[] = [];
  public isLoading: boolean = false;

  constructor(
    private reservationService: ReservationService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;

    setTimeout(() => {

      this.reservationService.getALl()
        .pipe(
          tap(reservations => this.reservations = reservations),
        ).subscribe(() => this.isLoading = false);
    }, 500);
  }

  onStatusSelected(status: string) {
    this.isLoading = true;
    this.reservationService.getALl(status = status)
      .pipe(
        tap(reservations => this.reservations = reservations),
      ).subscribe(() => this.isLoading = false);
  }

  changeStatus(uid: string) {
    const dialogRef = this.dialog.open(ChangeStatusgComponent, { disableClose: false, data: uid });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        tap(result => { if (result) this.loadData(); }),
      ).subscribe();
  }

  deleteReservation(uid: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { disableClose: true, data: { title: "Delete", message: "Are you sure?" } });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        tap(result => { if (result) this.isLoading = true; }),
        tap(() => this.isLoading = true),
        switchMap(() => this.reservationService.delete(uid)),
        filter((wasDeleted: boolean) => wasDeleted),
        tap(result => { if (result) this.loadData(); })
      ).subscribe();
  }

}
