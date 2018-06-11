import { Component, OnInit } from '@angular/core';
import {TeamMemberDetailService, TeamMember} from './team-member-detail.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.css']
})
export class TeamMemberDetailsComponent implements OnInit {

  constructor(private _teamMemberDetailService:TeamMemberDetailService,private router: Router) { }
  members:TeamMember[];

  ngOnInit() {
    this._teamMemberDetailService.getProducts().subscribe(res =>this.members= <TeamMember[]>res.json())
  }
}