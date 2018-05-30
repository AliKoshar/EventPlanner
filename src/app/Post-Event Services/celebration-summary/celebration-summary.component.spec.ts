import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationSummaryComponent } from './celebration-summary.component';

describe('CelebrationSummaryComponent', () => {
  let component: CelebrationSummaryComponent;
  let fixture: ComponentFixture<CelebrationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
