import { Component, OnInit } from '@angular/core';
import {TeamMemberDetailService, TeamMember} from './team-member-detail.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AddTeamMemberComponent } from "src/app/Home/add-team-member/add-team-member.component";
import { TeamMemberUpdateComponent } from "src/app/Home/team-member-update/team-member-update.component";
import { NgModule } from "@angular/core";



@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.css']
})


@NgModule({
declarations:[
AddTeamMemberComponent,
TeamMemberUpdateComponent
],
imports:[
BrowserModule,
FormsModule,
HttpModule,
RouterModule.forRoot([
{path:'addTeamMember',component:AddTeamMemberComponent },
{path:'updateTeamMember',component:TeamMemberUpdateComponent }
])
], 
providers:[],
bootstrap:[TeamMemberDetailsComponent]
})

export class TeamMemberDetailsComponent implements OnInit {

  constructor(private _teamMemberDetailService:TeamMemberDetailService,private router: Router) { }
  members:TeamMember[];
 ngOnInit() {
    this._teamMemberDetailService.getProducts().subscribe(res =>this.members= <TeamMember[]>res.json())
  }
}