import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Staff } from 'src/app/shared/interfaces/defaultdata.interface';


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedUser!: Staff;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
  }
}
