import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/Services/jira.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllTickets();
  }
  ticektsList: any;
  ticketsByID: any;
  status: any = ['To Do', 'In Progress', 'Done']
  constructor(
    private Service: JiraService,
    private http: HttpClient
  ) {
    this.Service.projectChange.subscribe((response: any) => {
      console.log(response, "on project change");
      this.GetTicketsByProjectId(response.projectId)
    })
    this.Service.onTicketCreate.subscribe((response: any) => {
      console.log(response, "on project change");
      this.GetTicketsByProjectId(response.projectId)
    })
  }

  GetAllTickets() {
    this.Service.GetAllTickets().subscribe((response: any) => {
      console.log(response.data);
      this.ticektsList = response.data;
      console.log(response.data, 'all tickets');

    })
  }

  GetTicketsByProjectId(projectid: any) {
    this.http.get('https://freeapi.miniprojectideas.com/api/Jira/GetTicketsByProjectId?projectid' + projectid).subscribe((response: any) => {
      this.ticketsByID = response.data;
      console.log(response.data, 'tickets by id');
    })
  }

  filterTickets(string: any) {
    return this.ticketsByID.filter(((m: { status: any; }) => m.status === this.status));
  }

}
