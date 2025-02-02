import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'salary',
        loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule)
    },
    {
        path: 'expense',
        loadChildren: () =>  import('./expense/expense.module').then(m => m.ExpenseModule)
    },
    {
        path: 'savings',
        loadChildren: () =>  import('./savings/savings.module').then(m => m.SavingsModule)
    }
];
