import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-savings-main',
  imports: [
    NavComponent,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './savings-main.component.html',
  styleUrl: './savings-main.component.scss'
})
export class SavingsMainComponent {

}
