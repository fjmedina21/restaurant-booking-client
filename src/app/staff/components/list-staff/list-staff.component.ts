import { Staff } from './../../../shared/interfaces/defaultdata.interface';
import { tap } from 'rxjs';
import { Component, type OnInit } from '@angular/core';
import { TableService } from 'src/app/table/services/table.service';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss'],
})
export class ListStaffComponent implements OnInit {

  staff: Staff[] = [];

  constructor(
    private staffService: StaffService) {

  }

  ngOnInit(): void {
    this.staffService.getALl()
      .pipe(
        tap(staff => this.staff = staff),
      ).subscribe();
  }
}
