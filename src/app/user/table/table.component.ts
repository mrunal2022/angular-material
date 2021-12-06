import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
export interface userTable {
  email: string;

  name: string;
  no: number;
  address: string;
}
const userData: userTable[] = [
  { email: 'mrunal@gmail.com', name: 'mrunal ghodke', no: 779857127, address: 'pune' },
  { email: 'janvi@gmail.com', name: 'janvi sharma', no: 998857127, address: 'delhi' },
  { email: 'nikita@gmail.com', name: 'nikita barve', no: 888881777, address: 'mumbai' },

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('userList') users: any;
  public subscription: Subscription;
  dataSource: any;
  displayedColumns: string[] = ['email', 'name', 'no', 'address'];


  constructor(public userService: UserService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.users.currentValue != undefined && changes.users.currentValue != null) {
      this.dataSource = changes.users.currentValue
    }

  }

  ngOnInit(): void {

    /*this.subscription = this.userService.users$.subscribe(val => {
      console.log(val)
      this.dataSource = val;
    }
    )

  */
  }

}
