import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberUpdateComponent } from './team-member-update.component';

describe('TeamMemberUpdateComponent', () => {
  let component: TeamMemberUpdateComponent;
  let fixture: ComponentFixture<TeamMemberUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
