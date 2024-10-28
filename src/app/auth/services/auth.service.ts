import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { enviroments } from 'src/env/environment.dev';
import { catchError, of, tap } from 'rxjs';
import { APIResponse, CrtStaff, Staff } from 'src/app/shared/interfaces/defaultdata.interface';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/shared/services/jwt.service';
import { LoginCredentials } from '../interfaces/login.interface';
import { ChangePassword } from '../interfaces/changePassword.interface';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl: string = enviroments.baseURL;
  private token!: string;
  private LoggedIn: boolean = false;
  private headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JWTService,
    private dialog: MatDialog
  ) {
    this.loadLocalStore();
    this.headers = new HttpHeaders().set('Authorization', this.getBearerToken()!);
  }

  private saveLocalStore() {
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  private loadLocalStore() {
    this.token = this.getToken()!;
  }

  login(credenciales: LoginCredentials) {
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post<APIResponse<Staff>>(url, credenciales)
      .pipe(
        tap(res => this.token = `${res.token}`),
        tap(() => this.saveLocalStore()),
      );
  }

  signup(model: CrtStaff) {
    const url = `${this.baseUrl}/restaurantStaff`;
    return this.http.post<APIResponse<Staff>>(url, model)
      .pipe(
        tap(res => this.token = `${res.token}`),
        tap(() => this.saveLocalStore()),
      );
  }

  changePassword(passwords: ChangePassword) {
    const url = `${this.baseUrl}/auth/change-password`;
    return this.http.post<APIResponse<Staff>>(url, passwords, { headers: this.headers })
    .pipe(
  /*     catchError(({ error }: HttpErrorResponse) => {
      this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
      return of();
    }) */
  );
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

  getToken(): string | null {
    if (!JSON.parse(localStorage.getItem("token")!)) return null;
    return `${JSON.parse(localStorage.getItem("token")!)}`;
  }

  getBearerToken(): string {
    return `Bearer ${JSON.parse(localStorage.getItem("token")!)}`;
  }

  getLoggedUser(): Staff {
    const { userId, email, firstName, lastName } = this.jwtService.DecodeToken(this.getToken()!);
    const user: Staff = { staffId: userId, email, firstName, lastName };
    return user;
  }

  checkIsLoggedIn() {
    if (!this.getToken()) {
      this.LoggedIn = false;
      return;
    };
    this.LoggedIn = true;
  }

  IsLoggedIn(): boolean {
    return this.LoggedIn;
  }

}
