import { Component, OnInit } from '@angular/core';
import {CelebrationExpensesService, CelebrationExpenses} from './celebration-expenses.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-celebration-expenses',
  templateUrl: './celebration-expenses.component.html',
  styleUrls: ['./celebration-expenses.component.css']
})
export class CelebrationExpensesComponent implements OnInit {

  constructor(private _receivedContributionService:CelebrationExpensesService,private router: Router) { }
  dates:CelebrationExpenses[];

  ngOnInit() {
    this._receivedContributionService.getCelebrationDate().subscribe(res =>this.dates= <CelebrationExpenses[]>res.json())
  }

}
