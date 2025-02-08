import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExpenseCreationComponent } from "../expense-creation/expense-creation.component";
import { ExpenseDetailsComponent } from "../expense-details/expense-details.component";
import { SavingsDetailsComponent } from "../../savings/savings-details/savings-details.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expense-bundle',
  imports: [
    MatTabsModule,
    ExpenseCreationComponent,
    ExpenseDetailsComponent,
    SavingsDetailsComponent,
    RouterOutlet
],
  templateUrl: './expense-bundle.component.html',
  styleUrl: './expense-bundle.component.scss'
})
export class ExpenseBundleComponent {

}
