import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { userTable } from './table/table.component';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit {
  subscription: Subscription;
  userData: userTable[] = [
    { email: 'mrunal@gmail.com', name: 'mrunal ghodke', no: 779857127, address: 'pune' },
    { email: 'janvi@gmail.com', name: 'janvi sharma', no: 998857127, address: 'delhi' },
    { email: 'nikita@gmail.com', name: 'nikita barve', no: 888881777, address: 'mumbai' },

  ];
  private subject = new BehaviorSubject(this.userData);
  startedEditing = new Subject<number>();
  users$: Observable<userTable[]> = this.subject.asObservable(

  )



  constructor() { }
  ngOnInit() {





  }
  postUser(user: userTable) {
    this.userData.push(user);
    this.subject.next(this.userData.slice());
  }
  getUserId(index: number) {
    return this.userData[index];
  }
  deleteUser(email) {
    const index = _.findIndex(this.userData, { email: email });
    this.userData.splice(index, 1);
    this.subject.next(this.userData.slice());
  }
  editUser(user: userTable) {
    const index = _.findIndex(this.userData, { email: user.email });
    this.userData.splice(index, 1, user);

    console.log(index, user);

    this.subject.next(this.userData.slice());



  }

}
