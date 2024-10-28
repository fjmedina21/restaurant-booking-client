import { catchError, of } from 'rxjs';
import { Component, Inject, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Table } from 'src/app/shared/interfaces/defaultdata.interface';
import { TableService } from '../../services/table.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';

@Component({
  selector: 'add-table',
  templateUrl: './addTable.component.html',
  styleUrls: ['./addTable.component.scss'],
})
export class AddTableComponent implements OnInit {

  disableBtn: boolean = false;
  isLoading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private tableService: TableService,
    public refDialog: MatDialogRef<AddTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Table,
  ) { }

  public tableForm: FormGroup = this.fb.group({
    name: [, Validators.required],
    capacity: [Validators.required, Validators.min(1)],
  });

  ngOnInit(): void { }

  submit() {
    if (!this.tableForm.valid) {
      const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Invalid Form", message: '' } });
      dialogRef.afterClosed().subscribe();
      this.tableForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.disableBtn = true;
    this.tableService.create(this.tableForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: error.message } });
          dialogRef.afterClosed().subscribe();
          this.isLoading = false;
          return of();
        })
      )
      .subscribe(() => {
        this.isLoading = false;
        this.disableBtn = false;
        this.refDialog.close(true);
      });
  }

}
