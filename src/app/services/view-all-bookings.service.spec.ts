import { TestBed } from '@angular/core/testing';

import { ViewAllBookingsService } from './view-all-bookings.service';

describe('ViewAllBookingsService', () => {
  let service: ViewAllBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
