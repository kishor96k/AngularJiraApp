import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/Services/jira.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  AllProjects: any[] = [];
  ngOnInit(): void {
    this.GetAllProjects();
  }
  constructor(
    private Service: JiraService
  ) { }

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

  createProjectObj: any = {
    "projectId": 0,
    "projectName": "",
    "shortName": "",
    "createdDate": new Date()
  }
  createProject() {
    this.Service.CreateProject(this.createProjectObj).subscribe((response: any) => {
      console.log(response, "create project");
      if (response.data) {
        // alert("Success create project");
        this.GetAllProjects();
      } else {
        alert("Error create project");
      }
    })
  }

  onEdit(projectId: any) { }

  onDelete(projectId: any) { }

}
