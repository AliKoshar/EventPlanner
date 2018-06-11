import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberDetailedViewComponent } from './team-member-detailed-view.component';

describe('TeamMemberDetailedViewComponent', () => {
  let component: TeamMemberDetailedViewComponent;
  let fixture: ComponentFixture<TeamMemberDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
