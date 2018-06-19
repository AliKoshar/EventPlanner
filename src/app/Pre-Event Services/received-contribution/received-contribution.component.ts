import { Component, OnInit } from '@angular/core';
import {ReceivedContributionService, ReceivedContribution} from './received-contribution.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-received-contribution',
  templateUrl: './received-contribution.component.html',
  styleUrls: ['./received-contribution.component.css']
})
export class ReceivedContributionComponent implements OnInit {

  constructor(private _receivedContributionService:ReceivedContributionService,private router: Router) { }
  employees:ReceivedContribution[];

  ngOnInit() {
    this._receivedContributionService.getTeamMembers().subscribe(res =>this.employees= <ReceivedContribution[]>res.json())
  }
}