import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SelectModule } from 'primeng/select';


//Service
import { SalaryService } from '../salary.service';



@Component({
  selector: 'app-salary-details-add',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SelectModule
  ],
  templateUrl: './salary-details-add.component.html',
  styleUrl: './salary-details-add.component.scss'
})
export class SalaryDetailsAddComponent {
  selectedOption = [
    {
      name: 'Daily',
      value: 'Daily'
    },
    {
      name: 'Monthly',
      value: 'Monthly'
    },
    {
      name: 'Yearly',
      value: 'Yearly'
    }
  ]

  public SalaryForm: FormGroup;

  constructor(
    private _location: Location,
    private router: Router,
    private _formBuilder: FormBuilder,
    private _salaryService: SalaryService
  ){
    this.SalaryForm = this._formBuilder.group({
      salarySource: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      salaryType: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(512)])],
      amount: [0, Validators.compose([Validators.required])],
      salaryExpense: [null, Validators.compose([Validators.required])],
      salarySavings: [null, Validators.compose([Validators.required])]
    })
  }

  onSubmit(){
    this._salaryService.AddNewSalary(this.SalaryForm.value).subscribe();
    this.back();
  }

  back(){
    this._location.back();
  }
}
