import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  loggedDetails: any;
  EventsList:any;

  ngOnInit(): void {
    this.GetEventsByOrganizer();
  }
  constructor(
    private Service: EventService
  ) {
    const localdata = localStorage.getItem('EventBook');
    if (localdata != null) {
      this.loggedDetails = JSON.parse(localdata);
    }
  }

  GetEventsByOrganizer() {
    this.Service.GetEventsByOrganizer(this.loggedDetails.userId).subscribe((response: any) => {
      console.log(response.data,"events by organizer");
      this.EventsList=response.data;
    })
  }

}
