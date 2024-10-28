import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ["./change-status.component.scss"]
})
export class ChangeStatusgComponent {

  public isLoading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private uid: string,
    private reservationService: ReservationService,
    public refDialog: MatDialogRef<ChangeStatusgComponent>,
    private dialog: MatDialog

  ) {
  }

  changeStatus(status: string) {
    this.isLoading = true;
    debugger
    this.reservationService.changeStatus(this.uid, status)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          this.isLoading = false;
          return of();
        }),
      ).subscribe(res => {
        debugger
        this.dialog.open(OkDialogComponent, { data: { title: "Success", message: `${"Status changed"}` } });
        this.isLoading = false;
        this.refDialog.close(true);
      });
  }
}
