import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidatorsService } from "src/app/shared/validators/validator.service";


@Component({
  selector: 'add-reservation',
  templateUrl: `./add-reservation.component.html`,
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent {

  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService) { }

  public reservationForm: FormGroup = this.fb.group({
    tableId: ['', Validators.required],
    numberOfPeople: ['', Validators.required],
    reservationStart: ['', Validators.required],
    reservationEnd: ['', Validators.required],
    preferences: ['', Validators.required],
    customer: this.fb.group({
      fullName: [, [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)], []],
      email: [, [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], []],
      phoneNumber: [, [Validators.required], []]
    }),
  });

  makeReservation() {
    console.log(this.reservationForm.value);
  }
}
