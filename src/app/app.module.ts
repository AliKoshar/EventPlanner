import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { EventProposalComponent } from './Pre-Event Services/event-proposal/event-proposal.component';
import { RouterModule,Routes } from '@angular/router';
import { ReceivedContributionComponent } from './Pre-Event Services/received-contribution/received-contribution.component';
import { TeamMemberDetailsComponent } from './Home/team-member-details/team-member-details.component';
import { CelebrationSummaryComponent } from './Post-Event Services/celebration-summary/celebration-summary.component';
import { TeamMemberSummaryComponent } from './Post-Event Services/team-member-summary/team-member-summary.component';
import { CelebrationExpensesComponent } from './Post-Event Services/celebration-expenses/celebration-expenses.component';


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
    CelebrationExpensesComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],

  bootstrap: [
    AppComponent,
    TeamMemberDetailsComponent,
    EventProposalComponent,
    ReceivedContributionComponent,
    CelebrationSummaryComponent,
    TeamMemberSummaryComponent,
    CelebrationExpensesComponent
  ]
})
export class AppModule { }