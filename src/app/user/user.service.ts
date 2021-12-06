import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userTable } from './table/table.component';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit {
  userData: userTable[] = [
    { email: 'mrunal@gmail.com', name: 'mrunal ghodke', no: 779857127, address: 'pune' },
    { email: 'janvi@gmail.com', name: 'janvi sharma', no: 998857127, address: 'delhi' },
    { email: 'nikita@gmail.com', name: 'nikita barve', no: 888881777, address: 'mumbai' },

  ];
  private subject = new BehaviorSubject(this.userData);
  users$: Observable<userTable[]> = this.subject.asObservable(

  )



  constructor() { }
  ngOnInit(): void {



  }
  postUser(user: userTable) {
    this.userData.push(user);
    this.subject.next(this.userData);
  }

}
