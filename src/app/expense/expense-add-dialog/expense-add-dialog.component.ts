import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-expense-add-dialog',
  imports: [
    MatFormField,
    MatLabel,
    FormsModule,
    MatButtonModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  ],
  templateUrl: './expense-add-dialog.component.html',
  styleUrl: './expense-add-dialog.component.scss'
})
export class ExpenseAddDialogComponent {
  animal: string | undefined;
  dialogRef: any;
  onNoClick(): void {
    this.dialogRef.close();
  }
}
