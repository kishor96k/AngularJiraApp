import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private Http: HttpClient
  ) { }

  path: any = 'https://freeapi.miniprojectideas.com/api/EventBooking/';

  Login(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'Login', Obj)
  }

  CreateUser(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'CreateUser', Obj)
  }

  GetAllEvents(): Observable<any> {
    return this.Http.get<any>(this.path + 'GetAllEvents')
  }

  CreateEvent(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'CreateEvent', Obj)
  }

  BookEvent(Obj: any): Observable<any> {
    return this.Http.post<any>(this.path + 'BookEvent', Obj)
  }
  GetEventsByOrganizer(organizerId: any): Observable<any> {
    return this.Http.get<any>(this.path + 'GetEventsByOrganizer?organizerId=' + organizerId)
  }

  GetBookingsByCustomer(customerId: any): Observable<any> {
    return this.Http.get<any>(this.path + 'GetBookingsByCustomer?customerId=' + customerId)
  }
}
