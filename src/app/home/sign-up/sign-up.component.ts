import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sign-up',
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  isSignUp: boolean = false;

  toggle(){
    this.isSignUp = !this.isSignUp;
  }
}
