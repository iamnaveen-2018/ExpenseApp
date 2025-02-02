import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseMainComponent } from './expense-main/expense-main.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseMainComponent,
    children: [
      {
        path: "",
        redirectTo: 'expense-details',
        pathMatch: 'full'
      },
      {
        path: 'expense-details',
        component: ExpenseDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
