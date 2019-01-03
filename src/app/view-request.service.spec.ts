import { TestBed } from '@angular/core/testing';

import { ViewRequestService } from './view-request.service';

describe('ViewRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewRequestService = TestBed.get(ViewRequestService);
    expect(service).toBeTruthy();
  });
});
