import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-expense-main',
  imports: [
    NavComponent,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './expense-main.component.html',
  styleUrl: './expense-main.component.scss'
})
export class ExpenseMainComponent {

}
