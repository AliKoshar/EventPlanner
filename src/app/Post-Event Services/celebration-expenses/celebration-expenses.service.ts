import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Injectable({
  providedIn: 'root'
})
export class CelebrationExpensesService {

  constructor(private http:Http) { }

  getCelebrationDate():Observable<Response> {
      return  this.http.get("http://localhost:61161/api/CelebrationExpenses");          
    }
}

export interface CelebrationExpenses
{    
    CelebrationDate:Date;  
}
