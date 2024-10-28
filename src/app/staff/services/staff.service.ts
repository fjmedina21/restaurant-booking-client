import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { enviroments } from 'src/env/environment.dev';
import { APIResponse, CrtStaff, Staff } from 'src/app/shared/interfaces/defaultdata.interface';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';

@Injectable({ providedIn: 'root' })
export class StaffService {

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

  getALl(currentPage = 1, pageSize = 20): Observable<Staff[]> {
    const url = `${this.baseUrl}/restaurantStaff?CurrentPage=${currentPage}&PageSize=${pageSize}`;
    return this.http.get<APIResponse<Staff>>(url, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data),
      );
  }

  getById(uid: string): Observable<Staff> {
    const url = `${this.baseUrl}/restaurantStaff/${uid}`;
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
  create(model: CrtStaff): Observable<Staff> {
    const url = `${this.baseUrl}/restaurantStaff`;
    return this.http.post<APIResponse<Staff>>(url, model, { headers: this.headers })
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
        map(res => res.data[0]),
      );
  }

  delete(uid: string): Observable<boolean> {
    const url = `${this.baseUrl}/restaurantStaff/${uid}`;
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
