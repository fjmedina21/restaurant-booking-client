import { catchError, filter, of, switchMap, tap } from 'rxjs';
import { Component, type OnInit } from '@angular/core';
import { Table } from 'src/app/shared/interfaces/defaultdata.interface';
import { TableService } from '../../services/table.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { AddTableComponent } from '../addTable/addTable.component';

@Component({
  selector: 'list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.scss'],
})
export class ListTablesComponent implements OnInit {

  tables!: Table[];
  isLoading: boolean = false;
  minDate = new Date().toISOString().split('T')[0];
  reservationStart!: Date;
  reservationEnd = this.reservationStart;

  constructor(
    private tableService: TableService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.tableService.getALl()
      .pipe(
        tap(tables => this.tables = tables),
      ).subscribe(() => this.isLoading = false);
  }

  addTable() {
    const dialogRef = this.dialog.open(AddTableComponent);
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        tap(result => { if (result) this.loadData(); }
        )
      ).subscribe();
  }

  getAvailableTables() {
    if (!this.reservationStart) {
      this.dialog.open(OkDialogComponent, { data: { title: "Date and Time Required", message: "Please select a date and time" } });
      return;
    }

    this.reservationStart.setMinutes(this.reservationStart.getMinutes() - this.reservationStart.getTimezoneOffset());
    this.reservationEnd.setMinutes(this.reservationEnd.getMinutes() - this.reservationEnd.getTimezoneOffset());
    this.isLoading = true;

    this.tableService.getAvailable(
      this.reservationStart.toISOString(),
      this.reservationEnd.toISOString()
    )
      .pipe(
        tap(tables => this.tables = tables),
      ).subscribe(() => {
        this.isLoading = false;
      });

  }

  deleteTable(uid: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { disableClose: true, data: { title: "Delete", message: "Are you sure?" } });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        tap(result => { if (result) this.isLoading = true; }),
        switchMap(() => this.tableService.delete(uid)
          .pipe(
            catchError(({ error }: HttpErrorResponse) => {
              this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
              this.isLoading = false;
              return of();
            }))),
        filter((wasDeleted: boolean) => wasDeleted),
        tap(result => { if (result) this.loadData(); })
      ).subscribe();
  }
}
