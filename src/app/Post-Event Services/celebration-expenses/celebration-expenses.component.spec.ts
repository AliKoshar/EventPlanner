import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationExpensesComponent } from './celebration-expenses.component';

describe('CelebrationExpensesComponent', () => {
  let component: CelebrationExpensesComponent;
  let fixture: ComponentFixture<CelebrationExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
