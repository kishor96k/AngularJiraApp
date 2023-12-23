import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JiraService } from 'src/app/Services/jira.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {
    this.GetAllProjects();
    this.GetAllUsers();
  }

  constructor(
    private Service: JiraService,
    private Router: Router
  ) {
    const localData = localStorage.getItem('userjira');
    if (localData != null) {
      const parsData = JSON.parse(localData);
      this.createTicketObj.createdBy = parsData.userId;
    }
  }

  AllProjects: any;
  usersList: any;
  issueTypes: any = ['ticket', 'defect', 'Rnd'];
  status: any = ['todo', 'inprogress', 'done'];
  createTicketObj: any = {
    "ticketId": 0,
    "createdDate": new Date(),
    "summary": "",
    "status": "",
    "description": "",
    "parentId": 0,
    "storyPoint": 0,
    "ticketGuid": "",
    "assignedTo": 0,
    "createdBy": 0,
    "projectId": 0
  }


  GetAllProjects() {
    this.Service.GetAllProjects().subscribe((response: any) => {
      console.log(response.data);
      if (response.data) {
        this.AllProjects = response.data;
        console.log(this.AllProjects, 'lll');
        // alert("Success all projects list");
      } else {
        alert("Error all projects list");
      }
    })
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

  createTicket() {
    this.Service.CreateTicket(this.createTicketObj).subscribe((response: any) => {
      console.log(response.data);
      if (response.result) {
        alert("Success ticket created");
        this.Service.onTicketCreate.next(true);
      } else {
        alert("Error ticket created");
      }
    })
  }

  projectOpen(obJ: any) {
    this.Service.projectChange.next(obJ);
  }


}
