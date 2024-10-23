import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/interfaces/defaultdata.interface';


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedUser!: User;
  patientsByRecintoCount: number = 0;
  usersCount: number = 0;
  consultsCount: number = 0;
  currentUserRoles!: string[] | string;


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.currentUserRoles = this.authService.getRole();
  }
}
