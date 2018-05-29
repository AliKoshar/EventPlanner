import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProposalComponent } from './event-proposal.component';

describe('EventProposalComponent', () => {
  let component: EventProposalComponent;
  let fixture: ComponentFixture<EventProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
