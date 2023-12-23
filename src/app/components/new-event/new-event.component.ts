import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.loggedDetails);

  }
  loggedDetails: any;
  constructor(
    private service: EventService
  ) {
    const localdata = localStorage.getItem('EventBook');
    if (localdata != null) {
      this.loggedDetails = JSON.parse(localdata);
      this.createEventObj.OrganizerId = this.loggedDetails.userId;
    }
  }

  createEventObj: any = {
    "EventId": 0,
    "EventName": "",
    "Description": "",
    "Location": "",
    "StartDate": "2023-12-02T10:16:01.322Z",
    "StartTime": "",
    "EndDate": "2023-12-02T10:16:01.322Z",
    "EndTime": "",
    "ImageUrl": "",
    "Capacity": "",
    "Price": 0,
    "OrganizerId": 0,
    "IsIdentityMandatory": true,
    "IsCoupleEntryMandatory": true
  }

  CreateEvent() {
    this.service.CreateEvent(this.createEventObj).subscribe((response: any) => {
      console.log(response, "create Event");
      if (response.result) {
        alert("Success createEvent");
      } else {
        alert("Error createEvent");
      }
    })
  }

}
