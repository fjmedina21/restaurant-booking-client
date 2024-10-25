import { catchError, map, Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APIResponse, CrtTale, Table } from 'src/app/shared/interfaces/defaultdata.interface';
import { enviroments } from 'src/env/environment.dev';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseUrl: string = enviroments.baseURL;
  private headers!: HttpHeaders;
  private bearerToken!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private okDialog: MatDialog
  ) {
    this.bearerToken = this.authService.getBearerToken();
    this.headers = new HttpHeaders().set('authorization', this.bearerToken!);
  }

  getALl(currentPage = 1, pageSize = 20): Observable<Table[]> {
    const url = `${this.baseUrl}/Tables?CurrentPage=${currentPage}&PageSize=${pageSize}`;
    return this.http.get<APIResponse<Table>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data),
      );
  }

  getAvailable(reservationStart: string): Observable<Table[]> {
    const url = `${this.baseUrl}/tables/available-tables?reservationStart=${reservationStart}`;
    return this.http.get<APIResponse<Table>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data),
      );
  }

  getById(uid: string): Observable<Table> {
    const url = `${this.baseUrl}/tables/${uid}`;
    return this.http.get<APIResponse<Table>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data[0]),
      );
  }

  create(model: CrtTale): Observable<Table> {
    const url = `${this.baseUrl}/tables`;
    return this.http.post<APIResponse<Table>>(url, model, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data[0]),
      );
  }

  delete(uid: string): Observable<boolean> {
    const url = `${this.baseUrl}/tables/${uid}`;
    return this.http.delete<void>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(() => true),
      );
  }
}
