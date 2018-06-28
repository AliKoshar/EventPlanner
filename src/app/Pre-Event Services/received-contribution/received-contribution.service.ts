import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Injectable({
  providedIn: 'root'
})
export class ReceivedContributionService {

  constructor(private http:Http) { }

    getTeamMembers():Observable<Response> {
      return  this.http.get("http://localhost:61161/api/ContributionCollector/GetData");          
    }
    getAmountToBePaid():Observable<Response> {
      return  this.http.get("http://localhost:61161/api/ContributionCollector/GetAmountToBePaid");          
    }
}

export interface ReceivedContribution
{    
    Name:string;  
    TeamMemberID:number;  
    AmountToBePaid:number;
}