import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
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
import { AddTeamMemberComponent } from './Home/add-team-member/add-team-member.component';
import { TeamMemberSummaryService } from "src/app/Post-Event Services/team-member-summary/team-member-summary.service";
import { TeamMemberDetailedViewComponent } from "src/app/Post-Event Services/team-member-detailed-view/team-member-detailed-view.component";


const appRoutes: Routes = [
  { path: 'teammemberdetails', component: TeamMemberDetailsComponent }, 
  { path: 'eventproposal', component: EventProposalComponent },
  { path: 'receivedcontribution', component: ReceivedContributionComponent },
  { path: 'celebrationsummary', component: CelebrationSummaryComponent },
  { path: 'teammembersummary', component: TeamMemberSummaryComponent },
  { path: 'celebrationexpenses', component: CelebrationExpensesComponent },
    {path:'addTeamMember',component:AddTeamMemberComponent },
    {path:'updateTeamMember',component:TeamMemberUpdateComponent },
     {path:'TeamMemberDetailedView',component:TeamMemberDetailedViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TeamMemberDetailsComponent,
    EventProposalComponent,
    ReceivedContributionComponent,
    CelebrationSummaryComponent,
    TeamMemberSummaryComponent,
    CelebrationExpensesComponent,
    TeamMemberUpdateComponent,
    AddTeamMemberComponent,
    TeamMemberDetailedViewComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    TeamMemberDetailService,
    TeamMemberSummaryService,
    ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }