import { CrtReservation, UpdReservation } from '../../shared/interfaces/defaultdata.interface';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, Reservation, Staff } from 'src/app/shared/interfaces/defaultdata.interface';
import { enviroments } from 'src/env/environment.dev';
import { AuthService } from 'src/app/auth/services/auth.service';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ReservationService {

  private baseUrl: string = enviroments.baseURL;
  private headers!: HttpHeaders;
  private bearerToken!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.bearerToken = this.authService.getBearerToken();
    this.headers = new HttpHeaders().set('authorization', this.bearerToken!);

  }

  getALl(status?: string, currentPage = 1, pageSize = 20): Observable<Reservation[]> {
    const url = `${this.baseUrl}/reservations?CurrentPage=${currentPage}&PageSize=${pageSize}&status=${status ?? ''}`;
    return this.http.get<APIResponse<Reservation>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data),
      );
  }

  getById(uid: string): Observable<Staff> {
    const url = `${this.baseUrl}/reservation/${uid}`;
    return this.http.get<APIResponse<Staff>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data[0]),
      );
  }

  //public endpoint
  getByCode(code: string) {
    const url = `${this.baseUrl}/reservations/${code}/info`;
    return this.http.get<APIResponse<Reservation>>(url)
      .pipe(
/*         catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }), */
        map(res => res.data[0]),
      );
  }

  //public endpoint
  create(model: CrtReservation) {
    const url = `${this.baseUrl}/reservations`;
    return this.http.post<APIResponse<Reservation>>(url, model)
      .pipe(
/*         catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }), */
        map(res => res.data[0]),
      );
  }

  changeStatus(uid: string, status: string) {
    const url = `${this.baseUrl}/reservations/${uid}/change-status?status=${status}`;
    return this.http.post<APIResponse<Reservation>>(url, {}, { headers: this.headers })
      .pipe(
/*         catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }), */
      );
  }

  //public endpoint
  cancel(code: string) {
    const url = `${this.baseUrl}/reservations/${code}/cancel`;
    return this.http.post<APIResponse<Reservation>>(url, {})
      .pipe(
/*         catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }), */
      );
  }

  //public endpoint
  update(code: string, model: UpdReservation) {
    const url = `${this.baseUrl}/reservations/${code}/edit`;
    return this.http.put<APIResponse<Reservation>>(url, model)
      .pipe(
 /*        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }), */
      );
  }

  delete(uid: string): Observable<boolean> {
    const url = `${this.baseUrl}/reservations/${uid}`;
    return this.http.delete<void>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(() => true),
      );
  }
}
