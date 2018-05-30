import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedContributionComponent } from './received-contribution.component';

describe('ReceivedContributionComponent', () => {
  let component: ReceivedContributionComponent;
  let fixture: ComponentFixture<ReceivedContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
