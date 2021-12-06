import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output('add-User') addUser = new EventEmitter()


  constructor() { }

  ngOnInit(): void {

  }
  example = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    no: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required)

  })
  getErrorMessage() {
    if (this.example.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.example.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {
    this.addUser.emit(this.example.getRawValue())

  }

}
