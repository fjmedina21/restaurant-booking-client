import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface dialogData {
  title?:string
  message?:string
}

@Component({
  selector: 'Ok-dialog',
  templateUrl: './ok-dialog.component.html'
})
export class OkDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData
  ) { }

  ok(): void {
    this.dialogRef.close();
  }
}
