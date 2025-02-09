import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ExpenseCreationComponent } from "../expense-creation/expense-creation.component";
import { ExpenseDetailsComponent } from "../expense-details/expense-details.component";


@Component({
  selector: 'app-expense-bundle',
  imports: [
    MatTabsModule,
    ExpenseCreationComponent,
    ExpenseDetailsComponent,
],
  templateUrl: './expense-bundle.component.html',
  styleUrl: './expense-bundle.component.scss'
})
export class ExpenseBundleComponent {

}
