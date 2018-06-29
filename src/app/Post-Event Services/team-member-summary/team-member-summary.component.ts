import { Component, OnInit } from '@angular/core';
import { TeamMemberSummaryService, TeamMemberSummary } from "src/app/Post-Event Services/team-member-summary/team-member-summary.service";
import { Router } from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-team-member-summary',
  templateUrl: './team-member-summary.component.html',
  styleUrls: ['./team-member-summary.component.css']
})

export class TeamMemberSummaryComponent implements OnInit {

 constructor(private _teamMemberDetailService:TeamMemberSummaryService,private router: Router) { }
  members:TeamMemberSummary[];
 ngOnInit() {
    this._teamMemberDetailService.getSummary().subscribe(res =>this.members= <TeamMemberSummary[]>res.json())
  }
}
