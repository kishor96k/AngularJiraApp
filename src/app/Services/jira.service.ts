import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(
    private http: HttpClient
  ) { }

  path: any = 'https://freeapi.miniprojectideas.com/api/Jira/';
  public projectChange = new Subject;
  public onTicketCreate = new Subject;

  Login(obj: any): Observable<any> {
    return this.http.post<any>(this.path + 'Login', obj);
  }

  CreateProject(obj: any): Observable<any> {
    return this.http.post<any>(this.path + 'CreateProject', obj);
  }

  CreateUser(obj: any): Observable<any> {
    return this.http.post<any>(this.path + 'CreateUser', obj);
  }

  CreateTicket(obj: any): Observable<any> {
    return this.http.post<any>(this.path + 'CreateTicket', obj);
  }

  GetAllProjects(): Observable<any> {
    return this.http.get<any>(this.path + 'GetAllProjects');
  }

  GetAllTickets(): Observable<any> {
    return this.http.get<any>(this.path + 'GetAllTickets');
  }



  GetAllUsers(): Observable<any> {
    return this.http.get<any>(this.path + 'GetAllUsers');
  }
}
