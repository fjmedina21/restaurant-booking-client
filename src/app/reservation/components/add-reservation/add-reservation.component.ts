import { UpdReservation } from './../../../shared/interfaces/defaultdata.interface';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { OkDialogComponent } from "src/app/shared/components/ok-dialog/ok-dialog.component";
import { Table } from "src/app/shared/interfaces/defaultdata.interface";
import { ValidatorsService } from "src/app/shared/validators/validator.service";
import { TableService } from "src/app/table/services/table.service";
import { ReservationService } from "../../services/reservation.service";


@Component({
  selector: 'add-reservation',
  templateUrl: `./add-reservation.component.html`,
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {

  disableBtn: boolean = false;
  isLoading: boolean = false;
  isUpdating: boolean = false;
  tables!: Table[];

  minDate = new Date().toISOString().split('T')[0];
  reservationStart!: Date;
  reservationEnd!: Date;

  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private reservationService: ReservationService,
    private dialog: MatDialog,
    private validatorsService: ValidatorsService) { }

  ngOnInit(): void { }

  public reservationForm: FormGroup = this.fb.group({
    reservationCode: [],
    reservationStart: [, Validators.required],
    reservationEnd: [, Validators.required],
    tableId: [, Validators.required],
    numberOfPeople: [, Validators.required],
    preferences: [, []],
    customer: this.fb.group({
      fullName: [, [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)], []],
      email: [, [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], []],
      phoneNumber: [, [Validators.required], []]
    }),
  });

  normalizedTime() {
    this.reservationStart = new Date(this.reservationForm.get('reservationStart')?.value);
    this.reservationEnd = new Date(this.reservationForm.get('reservationEnd')?.value);

    this.reservationStart.setMinutes(this.reservationStart.getMinutes() - this.reservationStart.getTimezoneOffset());
    this.reservationEnd.setMinutes(this.reservationEnd.getMinutes() - this.reservationEnd.getTimezoneOffset());

    this.reservationForm.get('reservationStart')?.setValue(this.reservationStart);
    this.reservationForm.get('reservationEnd')?.setValue(this.reservationEnd);
  }

  loadTables() {
    this.reservationStart = new Date(this.reservationForm.get('reservationStart')?.value);
    this.reservationEnd = new Date(this.reservationForm.get('reservationEnd')?.value);

    this.reservationStart.setMinutes(this.reservationStart.getMinutes() - this.reservationStart.getTimezoneOffset());
    this.reservationEnd.setMinutes(this.reservationEnd.getMinutes() - this.reservationEnd.getTimezoneOffset());

    this.tableService.getAvailable(
      this.reservationStart.toISOString(),
      this.reservationEnd.toISOString(),
    ).subscribe((data) => {
      this.tables = data;
    });
  }

  cancel() {
    const code = this.reservationForm.get('reservationCode')?.value;
    if (code === null || code === "") {
      const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Reservation Code", message: 'The reservation code is required for this action' } });
      dialogRef.afterClosed().subscribe();
      return;
    }

    this.isLoading = true;
    this.disableBtn = true;
    this.reservationService.cancel(code)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: error.message } });
          dialogRef.afterClosed().subscribe();
          this.isLoading = false;
          this.disableBtn = false;
          return of();
        })
      )
      .subscribe(res => {
        const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Success", message: "Reservation cancelled" } });
        dialogRef.afterClosed().subscribe();
        this.isLoading = false;
        this.disableBtn = false;
      });
  }

  loadModifyData() {
    const code = this.reservationForm.get('reservationCode')?.value;
    if (code === null || code === "") {
      this.dialog.open(OkDialogComponent, { data: { title: "Reservation Code", message: 'The reservation code is required for this action' } });
      return;
    }

    this.isUpdating = true;
    this.reservationService.getByCode(code)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Reservation Not Found", message: "There no such reservation in our records" } });
          this.isLoading = false;
          this.disableBtn = false;
          return of();
        })
      ).subscribe(res => {

        this.reservationForm.controls['tableId'].setValue(res.table.tableId);
        this.reservationForm.controls['reservationStart'].setValue(res.reservationStart);
        this.reservationForm.controls['reservationEnd'].setValue(res.reservationEnd);
        this.reservationForm.controls['numberOfPeople'].setValue(res.numberOfPeople);
        this.reservationForm.controls['preferences'].setValue(res.preferences ?? "");

        this.minDate = new Date().toISOString().split('T')[0];
        this.isLoading = false;
        this.disableBtn = false;
        this.loadTables();
      });
  }

  update(code: string) {
    this.isLoading = true;
    this.disableBtn = true;
    this.normalizedTime();

    this.reservationService.update(code, this.reservationForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: error.message ?? "error" } });
          this.isLoading = false;
          this.disableBtn = false;
          this.isUpdating = false;
          this.reservationForm.reset();
          return of();
        })
      ).subscribe(() => {
        this.dialog.open(OkDialogComponent, { data: { title: "Success", message: "Reservation modified" } });
        this.isLoading = false;
        this.disableBtn = false;
        this.isUpdating = false;
        this.reservationForm.reset();
      });
  }

  submit() {
    if (this.isUpdating) {
      const code = this.reservationForm.get('reservationCode')?.value;
      this.update(code);
      return;
    }

    if (!this.reservationForm.valid) {
      const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Invalid Form", message: 'check your info' } });
      dialogRef.afterClosed().subscribe();
      this.reservationForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.disableBtn = true;
    this.normalizedTime();

    this.reservationService.create(this.reservationForm.value)
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
        this.reservationForm.reset();
      });
  }
}
