import { NgFor } from "@angular/common";
import { Component, Input } from '@angular/core';



interface Event {
  designation: string,
  company: string,
  icon: string,
  fromDate: string,
  toDate: string,
  description: string
}



@Component({
  selector: 'app-timeline',
  standalone:true,
  imports:[NgFor],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  
  @Input()
  events: Event[] = Array<Event>();
}
