import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidatorsService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public disableBtn: boolean = false;
  public isLoading: boolean = false;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private validatorService: ValidatorsService,
    private dialog: MatDialog,
    private router: Router,
  ) { }


  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', [Validators.required]],
  });

  logIn() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.disableBtn = true;

    this.authService.login(this.loginForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          const dialogRef = this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: error.message } });
          dialogRef.afterClosed().subscribe();
          return of(error);
        })
      )
      .subscribe(() => {
        this.disableBtn = false;
        this.isLoading = false;
        this.router.navigateByUrl('/reservations');
      });

  }
}
