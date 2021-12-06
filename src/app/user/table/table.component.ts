import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  editedUserIndex: number;
  dataSource: any;
  displayForm = false;
  email: string;
  displayedColumns: string[] = ['email', 'name', 'no', 'address', 'actions'];


  constructor(public userService: UserService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.users.currentValue != undefined && changes.users.currentValue != null) {
      this.dataSource = changes.users.currentValue
    }

  }

  ngOnInit() {
    this.subscription = this.userService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedUserIndex = index;



        }
      );



  }
  onedit(email) {

    this.userService.editUser(email);


  }
  ondelete(email) {
    console.log(email);

    this.userService.deleteUser(email);


  }

}
