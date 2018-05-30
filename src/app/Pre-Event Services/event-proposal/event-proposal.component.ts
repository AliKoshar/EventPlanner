import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-proposal',
  templateUrl: './event-proposal.component.html',
  styleUrls: ['./event-proposal.component.css']
})
export class EventProposalComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
