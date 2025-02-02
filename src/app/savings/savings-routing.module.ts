import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingsMainComponent } from './savings-main/savings-main.component';
import { SavingsDetailsComponent } from './savings-details/savings-details.component';

const routes: Routes = [
  {
    path: '',
    component: SavingsMainComponent,
    children: [
      {
        path: "",
        redirectTo: 'savings-details',
        pathMatch: 'full'
      },
      {
        path: 'savings-details',
        component: SavingsDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
