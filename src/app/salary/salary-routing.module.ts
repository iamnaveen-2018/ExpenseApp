import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { SalaryDetailsAddComponent } from './salary-details-add/salary-details-add.component';
import { SalaryMainComponent } from './salary-main/salary-main.component';

const routes: Routes = [
  {
    path: '',
    component: SalaryMainComponent,
    children: [
      {
        path: "",
        redirectTo: 'salary-details',
        pathMatch: 'full'
      },
      {
        path: 'salary-details',
        component: SalaryDetailsComponent
      },
      {
        path: 'salary-details/add',
        component: SalaryDetailsAddComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
