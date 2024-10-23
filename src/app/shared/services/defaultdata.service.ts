import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroments } from 'src/env/environment.dev';
import { Observable, map } from 'rxjs';
import { APIResponse, Role } from '../interfaces/defaultdata.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class DefaultDataService {

  private baseUrl: string = enviroments.baseURL;

  private token: string;
  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.token = this.authService.getBearerToken();
    this.headers = new HttpHeaders().set('authorization', this.token!);
  }

  getRoles(): Observable<Role[]> {
    const url = `${this.baseUrl}/roles`;
    return this.http.get<APIResponse<Role>>(url, { headers: this.headers })
      .pipe(
        map(res => res.data),
      );
  }

}
