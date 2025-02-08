import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseMainComponent } from './expense-main/expense-main.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';
import { ExpenseBundleComponent } from './expense-bundle/expense-bundle.component';
import { ExpenseAddDialogComponent } from './expense-add-dialog/expense-add-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseMainComponent,
    children: [
      {
        path: "",
        redirectTo: 'expense-bundle',
        pathMatch: 'full'
      },
      {
        path: 'expense-details',
        component: ExpenseDetailsComponent
      },
      {
        path: 'expense-creation',
        component: ExpenseCreationComponent
      },
      {
        path: 'expense-bundle',
        component: ExpenseBundleComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
