import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('userToEdit') userToEdit: any;
  @Output('add-User') addUser = new EventEmitter()


  editMode = false;
  subscription: Subscription;


  constructor(private userService: UserService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.userToEdit.currentValue != undefined && changes.userToEdit.currentValue != null) {
      this.editMode = true;

      this.patchForm();


    }

  }

  ngOnInit() {

  }
  example = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    no: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    //country: new FormControl("", Validators.required),
    //gender: new FormControl("", Validators.required)

  })
  getErrorMessage() {
    if (this.example.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.example.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {
    console.log('on submit', this.editMode)
    if (this.editMode) {
      this.userService.editUser(this.example.getRawValue());

    }
    else {
      this.addUser.emit(this.example.getRawValue());


    }
    this.editMode = false;
    this.example.reset();


  }
  patchForm() {
    console.log(this.userToEdit);
    this.example.get('name').patchValue(
      this.userToEdit.name
    );
    this.example.get('email').patchValue(
      this.userToEdit.email
    );
    this.example.get('address').patchValue(
      this.userToEdit.address
    );
    this.example.get('email').disable();
    this.example.get('no').patchValue(
      this.userToEdit.no
    );
    /*this.example.get('gender').patchValue(
      this.userToEdit.gender
    );
    this.example.get('country').patchValue(
      this.userToEdit.country
    );*/
  }


}
