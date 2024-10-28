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
    public refDialog: MatDialogRef<ChangePasswordComponent>,
    private dialog: MatDialog,

  ) { }

  onNoClick(): void {
    this.refDialog.close(false);
  }

  onSubmit(): void {
    this.isLoading = true;
    if (!this.changePasswordForm.valid) return;
    this.authService.changePassword(this.changePasswordForm.value)
      .pipe(
        catchError(({ error }: HttpErrorResponse) => {
          this.isLoading = false;
          this.dialog.open(OkDialogComponent, { data: { title: "Failed", message: `${error.message ?? "Something happend!!"}` } });
          return of();
        }),
      )
      .subscribe((res: APIResponse<Staff>) => {
        this.isLoading = false;
        this.dialog.open(OkDialogComponent, { data: { title: "Success", message: `${res.message ?? "Done!!"}` } });
        this.refDialog.close();
      });

  }
}
