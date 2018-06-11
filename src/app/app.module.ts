import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {HttpModule} from '@angular/http';
=======
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
>>>>>>> b9b5e561bfa71e31a90c5ba8a5cdf4f0ab9e53d5
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamMemberDetailsComponent } from './Home/team-member-details/team-member-details.component';
import { EventProposalComponent } from './Pre-Event Services/event-proposal/event-proposal.component';
import { ReceivedContributionComponent } from './Pre-Event Services/received-contribution/received-contribution.component';
import { CelebrationSummaryComponent } from './Post-Event Services/celebration-summary/celebration-summary.component';
import { TeamMemberSummaryComponent } from './Post-Event Services/team-member-summary/team-member-summary.component';
import { CelebrationExpensesComponent } from './Post-Event Services/celebration-expenses/celebration-expenses.component';
import {TeamMemberDetailService} from './Home/team-member-details/team-member-detail.service';

import {TeamMemberUpdateComponent} from './Home/team-member-update/team-member-update.component';


const appRoutes: Routes = [
  { path: 'teammemberdetails', component: TeamMemberDetailsComponent }, 
  { path: 'eventproposal', component: EventProposalComponent },
  { path: 'receivedcontribution', component: ReceivedContributionComponent },
  { path: 'celebrationsummary', component: CelebrationSummaryComponent },
  { path: 'teammembersummary', component: TeamMemberSummaryComponent },
  { path: 'celebrationexpenses', component: CelebrationExpensesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TeamMemberDetailsComponent,
    EventProposalComponent,
    ReceivedContributionComponent,
    CelebrationSummaryComponent,
    TeamMemberSummaryComponent,
<<<<<<< HEAD
    CelebrationExpensesComponent,
    TeamMemberUpdateComponent,
=======
   
    CelebrationExpensesComponent
>>>>>>> b9b5e561bfa71e31a90c5ba8a5cdf4f0ab9e53d5
  ],
  
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)
=======
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
  
>>>>>>> b9b5e561bfa71e31a90c5ba8a5cdf4f0ab9e53d5
  ],

  providers: [TeamMemberDetailService],

  bootstrap: [
    AppComponent
<<<<<<< HEAD
  ]
=======
   ]
>>>>>>> b9b5e561bfa71e31a90c5ba8a5cdf4f0ab9e53d5
})
export class AppModule { }