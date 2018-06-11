import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TeamMemberDetailService {

  constructor(private http:Http) { }

 

  getProducts():Observable<Response> {
      return  this.http.get("http://localhost:61161/api/TeamMember");          
      
    }


}

export interface  TeamMember  
{
          TeamMemberID:number;
          Name:string;
          EmailID:string;
          BirthDate:Date;
          IsActive:boolean;
          CreatedBy:string;
          CreatedOn:Date;
          ModifiedBy:string;
          ModifiedOn:Date;
          Comments:string;
          AmountToBePaid:number;
          Balance:number;
}