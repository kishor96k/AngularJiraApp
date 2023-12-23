import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEvents: any;
  loggedDetails: any;
  
  bookEventObj: any = {
    "BookingId": 0,
    "UserId": 0,
    "EventId": 0,
    "NoOfTickets": 0,
    "EventBookingMembers": [
    ]
  }

  bookMember: any = {
    "BookingMemberId": 0,
    "BookingId": 0,
    "Name": "",
    "Age": 0,
    "IdentityCard": "",
    "CardNo": "",
    "ContactNo": ""
  }

  ngOnInit(): void {
    this.GetAllEvents();
  }

  constructor(
    private Service: EventService
  ) {
    const localdata = localStorage.getItem('EventBook');
    if (localdata != null) {
      const user = JSON.parse(localdata);
      this.bookEventObj.UserId = user.userId;
    }
  }

  GetAllEvents() {
    this.Service.GetAllEvents().subscribe((response: any) => {
      console.log(response.data, "all events");
      this.allEvents = response.data;
    })
  }

  openbookNowModal(item: any) {
    this.bookEventObj.EventId = item.eventId;
    const Modal = document.getElementById('booknowModal');
    if (Modal != null) {
      Modal.style.display = 'block'
    }
  }

  closebookNowModal() {
    const Modal = document.getElementById('booknowModal');
    if (Modal != null) {
      Modal.style.display = 'none';
    }
  }

  addBook() {
    const obj = JSON.stringify(this.bookMember);
    this.bookMember = {
      "BookingMemberId": 0,
      "BookingId": 0,
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
    }
    this.bookEventObj.EventBookingMembers.push(JSON.parse(obj));
  }

  MakeBook() {
    this.bookEventObj.NoOfTickets=this.bookEventObj.EventBookingMembers.length;
    this.Service.BookEvent(this.bookEventObj).subscribe((response: any) => {
      console.log(response, 'ticket booked');
      this.closebookNowModal();
      if (response.result) {
        alert("Success Booked");
      } else {
        alert("Error Booked");
      }
    })
  }



}
