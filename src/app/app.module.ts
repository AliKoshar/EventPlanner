import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventProposalComponent } from './Pre-Event Services/event-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    EventProposalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
