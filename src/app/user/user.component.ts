import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { userTable } from './table/table.component';
import { UserService } from './user.service';
import * as _ from 'lodash';
import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public subscription: Subscription;
  dataSource: any;
  users: userTable[];
  users$: Observable<userTable[]>
  userToEdit: userTable;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.subscription = this.userService.users$.subscribe(val => {
      console.log('user-val', val)
      this.users = null;
      this.users = val;
    }
    )
  }

  addUser($event) {
    console.log('add user event', $event);
    this.userService.postUser($event);
  }

  edit($event) {
    console.log('edit log msg', $event);
    this.userToEdit = _.find(this.users, { email: $event })
    console.log(this.userToEdit);
  }

}
