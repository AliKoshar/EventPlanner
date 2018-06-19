import { TestBed, inject } from '@angular/core/testing';

import { TeamMemberSummaryService } from './team-member-summary.service';

describe('TeamMemberSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamMemberSummaryService]
    });
  });

  it('should be created', inject([TeamMemberSummaryService], (service: TeamMemberSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
