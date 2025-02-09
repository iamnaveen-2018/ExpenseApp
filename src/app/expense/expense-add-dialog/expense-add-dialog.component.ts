import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SelectModule } from 'primeng/select';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-expense-add-dialog',
  imports: [
    SelectModule,
    ReactiveFormsModule,
    MatError,
    MatIconModule,
    MatDividerModule,
    MatFormField,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatInputModule,
  ],
  templateUrl: './expense-add-dialog.component.html',
  styleUrl: './expense-add-dialog.component.scss'
})
export class ExpenseAddDialogComponent implements OnInit {
  expenseForm: FormGroup;
  salaryDetails: any;
  names = [
    {
      name: 'Vishnu',
      value: 'Vishnu'
    },
    {
      name:'Naveen',
      value: 'Naveen'
    },
    {
      name: 'Chendur',
      value: 'Chendur'
    }
  ]
  constructor(
    private dialogRef: MatDialogRef<ExpenseAddDialogComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private _expenseService: ExpenseService
  ){
      this.expenseForm = this.fb.group({
        expenseName: [null,Validators.compose([Validators.required, Validators.maxLength(100)])],
        expenseType: [null,Validators.required],
        description: [null,Validators.required],
        salaryId: [null,Validators.required],
        expenseAmount: [null,Validators.compose([Validators.required,Validators.min(1)])]
      })
  }

  ngOnInit(): void {
    this.loadSalary();
    this.dialogRef.updatePosition({
      top: '5%'
    })
  }

  onNoClick(): void {
    this.dialog.closeAll(); 
  }

  loadSalary(){
    this._expenseService.GetAllSalary().subscribe((ele) => {
      this.salaryDetails = ele.data
      console.log(this.salaryDetails)
      this.salaryDetails = this.salaryDetails.map((res: any) => {
        return{
          name: res.salarySource,
          value: res.salaryId
        }
      })
      
    })
  }

  onSubmit(){
    console.log("Submited");  
    this._expenseService.AddNewExpense(this.expenseForm.value).subscribe((res: any) => {
      console.log(res)
    });
    this.dialogRef.close('submit');
  }
}
