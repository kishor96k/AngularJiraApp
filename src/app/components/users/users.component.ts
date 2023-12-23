import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/Services/jira.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllUsers();
  }

  constructor(
    private Service: JiraService
  ) { }

  usersList: any;
  userCreateObj: any = {
    "userId": 0,
    "emailId": "",
    "fullName": "",
    "password": ""
  }

  GetAllUsers() {
    this.Service.GetAllUsers().subscribe((response: any) => {
      console.log(response.data, "users list");
      this.usersList = response.data;
      if (response.result) {
        // alert("succes list of users");
      } else {
        alert("error list of users")
      }
    })
  }

  createUser() {
    this.Service.CreateUser(this.userCreateObj).subscribe((response: any) => {
      console.log(response.data, "user created");
      this.usersList = response.data;
      if (response.result) {
        // alert("User Created Success");
      } else {
        alert("User creation fails Error")
      }
    })
  }

  onEdit(userId: any) { }

  onDelete(userId: any) { }
  
}
