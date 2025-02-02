import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalaryRoutingModule } from './salary-routing.module';


// Material Imports 

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SalaryRoutingModule,
    MatCardModule
  ]
})
export class SalaryModule { }
