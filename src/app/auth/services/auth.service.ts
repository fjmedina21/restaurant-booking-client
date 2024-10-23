import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroments } from 'src/env/environment.dev';
import { map, tap } from 'rxjs';
import { APIResponse, User } from 'src/app/shared/interfaces/defaultdata.interface';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/shared/services/jwt.service';
import { LoginCredentials } from '../interfaces/login.interface';
import { ChangePassword } from '../interfaces/changePassword.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl: string = enviroments.baseURL;
  private authorization!: string;
  private userLogged!: User;
  private LoggedIn: boolean = false;
  private token!: string;
  public headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JWTService,
  ) {
    this.loadLocalStore();
    this.token = this.getBearerToken();
    this.headers = new HttpHeaders().set('authorization', this.token!);

  }

  private saveLocalStore() {
    localStorage.setItem('user', JSON.stringify(this.userLogged));
    localStorage.setItem('token', JSON.stringify(this.authorization));
  }

  private loadLocalStore() {
    if (!localStorage.getItem('user')) return;
    this.userLogged = this.getLoggedUser();
    this.authorization = this.getToken()!;
  }

  login(credenciales: LoginCredentials) {
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post<APIResponse<User>>(url, credenciales)
      .pipe(
        tap(res => this.authorization = `${res.token}`),
        map(res => res.data),
        tap(res => this.userLogged = res[0]),
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
    return JSON.parse(localStorage.getItem('user')!) as User;
  }

  setLoggedUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  checkIsLoggedIn() {

    if (!this.getToken() || !this.getLoggedUser()) {
      this.LoggedIn = false;
      return;
    };

    this.LoggedIn = true;
  }

  IsLoggedIn(): boolean {
    return this.LoggedIn;
  }

  getRole() {
    return this.jwtService.DecodeToken(this.getToken()!).role;
  }

}
