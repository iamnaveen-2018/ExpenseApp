import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-expense-add-dialog',
  imports: [
    MatIconModule,
    MatDividerModule,
    MatFormField,
    MatLabel,
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatInputModule,
    MatLabel
  ],
  templateUrl: './expense-add-dialog.component.html',
  styleUrl: './expense-add-dialog.component.scss'
})
export class ExpenseAddDialogComponent {
  animal: string | undefined;

  constructor(
    private dialogRef: MatDialogRef<ExpenseAddDialogComponent>,
    private dialog: MatDialog
  ){}
  onNoClick(): void {
    this.dialog.closeAll(); 
    this.dialogRef.close('submit')
  }
}
