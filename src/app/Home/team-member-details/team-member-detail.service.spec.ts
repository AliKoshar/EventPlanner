import { TestBed, inject } from '@angular/core/testing';

import { TeamMemberDetailService } from './team-member-detail.service';

describe('TeamMemberDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamMemberDetailService]
    });
  });

  it('should be created', inject([TeamMemberDetailService], (service: TeamMemberDetailService) => {
    expect(service).toBeTruthy();
  }));
});
