import { ValidatorsService } from '../../../shared/validators/validator.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { StaffService } from 'src/app/staff/services/staff.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public disableBtn: boolean = false;
  public isLoading: boolean = false;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private validatorService: ValidatorsService,
    private router: Router,
  ) { }

  public signupForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  signUp() {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.disableBtn = true;

    this.authService.signup(this.signupForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: error.message } });
          dialogRef.afterClosed().subscribe();
          return of(error);
        })
      )
      .subscribe(() => {
        this.disableBtn = false;
        this.router.navigateByUrl('/home');
      });

  }
}
