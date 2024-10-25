import { AuthService } from 'src/app/auth/services/auth.service';
import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of, tap, filter } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { OkDialogComponent } from 'src/app/shared/components/ok-dialog/ok-dialog.component';
import { APIResponse, Staff } from 'src/app/shared/interfaces/defaultdata.interface';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent {

  public isLoading: boolean = false;

  public changePasswordForm: FormGroup = this.fb.group({
    oldPassword: [, [Validators.required]],
    newPassword: [, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public passwordDialog: MatDialogRef<ChangePasswordComponent>,
    private okDialog: MatDialog,

  ) { }

  onNoClick(): void {
    this.passwordDialog.close(false);
  }

  onSubmit(): void {
    if (!this.changePasswordForm.valid) return;
    this.authService.changePassword(this.changePasswordForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.okDialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
      )
      .subscribe((res: APIResponse<Staff>) => {
        this.passwordDialog.close(true);
        this.okDialog.open(OkDialogComponent, { data: { title: "Success", message: `${res.message ?? "Done!!"}` } });
      });

  }
}
