import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamMemberSummaryService {
constructor(private http:Http) { }
 TeamMemberID:number;
  private headers=new Headers({'Content-Type':'application/json'});
  getSummary():Observable<Response> {
      return  this.http.get("http://localhost:61161/api/TeamMemberSummary");          
    }
}

export interface TeamMemberSummary  
{
          TeamMemberID:number;
          Name:string;
          AmountToBePaid:number;
          Balance:number;
          AmountPaid:number;
          PaidOn:Date;
}