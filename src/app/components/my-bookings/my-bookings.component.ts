import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any;

  ngOnInit(): void {
  }

  constructor(
    private Service: EventService,
    private Http: HttpClient
  ) {
    const localdata = localStorage.getItem('EventBook');
    if (localdata != null) {
      const user = JSON.parse(localdata);
      this.GetBookingsByCustomer(user.userId);
    }
  }

  GetBookingsByCustomer(userid: any) {
    this.Service.GetBookingsByCustomer(userid).subscribe((response:any)=>{
      console.log(response.data,"all bookings"); 
      this.bookings=response.data;
    })
  }

  // {
  //   bookingId: 142,
  //   bookingNo: "EV-105-1401",
  //   endDate: "2023-12-30T00:00:00",
  //   eventId: 105,
  //   eventName: "Events Two",
  //   noOfTickets: 1,
  //   organizerId: 7,
  //   organizerName: "ravi",
  //   startDate: "2023-12-14T00:00:00",
  //   startTime: "06:12"
  // }


}
