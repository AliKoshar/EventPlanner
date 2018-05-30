import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberSummaryComponent } from './team-member-summary.component';

describe('TeamMemberSummaryComponent', () => {
  let component: TeamMemberSummaryComponent;
  let fixture: ComponentFixture<TeamMemberSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
