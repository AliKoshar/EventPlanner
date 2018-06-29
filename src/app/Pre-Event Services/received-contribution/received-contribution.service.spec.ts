import { TestBed, inject } from '@angular/core/testing';

import { ReceivedContributionService } from './received-contribution.service';

describe('ReceivedContributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceivedContributionService]
    });
  });

  it('should be created', inject([ReceivedContributionService], (service: ReceivedContributionService) => {
    expect(service).toBeTruthy();
  }));
});
