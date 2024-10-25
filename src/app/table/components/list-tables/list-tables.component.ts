import { catchError, filter, of, switchMap, tap } from 'rxjs';
import { Component, type OnInit } from '@angular/core';
import { Table } from 'src/app/shared/interfaces/defaultdata.interface';
import { TableService } from '../../services/table.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';

@Component({
  selector: 'list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.scss'],
})
export class ListTablesComponent implements OnInit {

  tables: Table[] = [];
  public isLoading: boolean = false;

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

  onDateChange(date: string) {
    this.isLoading = true;
    this.tableService.getAvailable(date)
      .pipe(
        tap(tables => this.tables = tables),
      ).subscribe(() => this.isLoading = false);
  }

  deleteTable(uid: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { disableClose: true, data: { title: "Delete", message: "Are you sure?" } });
    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.tableService.delete(uid)
          .pipe(
            catchError(({ error }: HttpErrorResponse) => {
              this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
              return of();
            }),
            tap(() => this.loadData()
            ))),
        filter((wasDeleted: boolean) => wasDeleted),
      ).subscribe();
  }
}
