import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-salary-main',
  imports: [RouterOutlet, RouterModule, NavComponent],
  templateUrl: './salary-main.component.html',
  styleUrl: './salary-main.component.scss'
})
export class SalaryMainComponent {

}
