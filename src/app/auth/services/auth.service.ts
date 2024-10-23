import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroments } from 'src/env/environment.dev';
import { tap } from 'rxjs';
import { APIResponse, User } from 'src/app/shared/interfaces/defaultdata.interface';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/shared/services/jwt.service';
import { LoginCredentials } from '../interfaces/login.interface';
import { ChangePassword } from '../interfaces/changePassword.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl: string = enviroments.baseURL;
  private token!: string;
  private LoggedIn: boolean = false;
  private bearerToken!: string;
  private headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JWTService,
  ) {
    this.loadLocalStore();
    this.bearerToken = this.getBearerToken();
    this.headers = new HttpHeaders().set('authorization', this.bearerToken!);

  }

  private saveLocalStore() {
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  private loadLocalStore() {
    this.token = this.getToken()!;
  }

  login(credenciales: LoginCredentials) {
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post<APIResponse<User>>(url, credenciales)
      .pipe(
        tap(res => this.token = `${res.token}`),
        tap(() => this.saveLocalStore()),
      );
  }

  changePassword(passwords: ChangePassword) {
    const url = `${this.baseUrl}/auth/change-password`;
    return this.http.post<APIResponse<User>>(url, passwords, { headers: this.headers });
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

  getLoggedUser(): User {
    const { userId, email } = this.jwtService.DecodeToken(this.getToken()!);
    const user: User = {  staffId: userId, email, firstName: '', lastName: '' };
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

  getRole() {
    const { role } = this.jwtService.DecodeToken(this.getToken()!);
    return role;
  }

}
