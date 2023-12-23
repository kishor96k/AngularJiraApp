import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JiraService } from 'src/app/Services/jira.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {

  }
  constructor(
    private Service: JiraService, 
    private http: HttpClient,
    private router:Router
    ) { }

  loginObj: any = {
    "userId": 0,
    "emailId": "",
    "fullName": "",
    "password": ""
  }


  loginUser() {
    this.Service.Login(this.loginObj).subscribe((response: any) => {
      console.log(response.data);
      if (response.result) {
        localStorage.setItem('userjira', JSON.stringify(response.data));
        this.router.navigateByUrl('/board');
        alert("Success Login")
      } else {
        alert("Error Login");
      }
    })
  }

}
