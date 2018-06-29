import { TestBed, inject } from '@angular/core/testing';

import { CelebrationExpensesService } from './celebration-expenses.service';

describe('CelebrationExpensesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CelebrationExpensesService]
    });
  });

  it('should be created', inject([CelebrationExpensesService], (service: CelebrationExpensesService) => {
    expect(service).toBeTruthy();
  }));
});
