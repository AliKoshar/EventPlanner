import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { EventProposalComponent } from './Pre-Event Services/event-proposal.component';
import { ReceivedContributionComponent } from './Pre-Event Services/received-contribution/received-contribution.component';

import { EventProposalComponent } from './Pre-Event Services/event-proposal/event-proposal.component';
import { RouterModule,Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'eventproposal', component: EventProposalComponent }
 
  
];


@NgModule({
  declarations: [
    AppComponent,
    EventProposalComponent,
    ReceivedContributionComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }