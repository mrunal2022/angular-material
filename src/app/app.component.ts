import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  example = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    number: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)

  })
  getErrorMessage() {
    if (this.example.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.example.get('email').hasError('email') ? 'Not a valid email' : '';
  }
}
