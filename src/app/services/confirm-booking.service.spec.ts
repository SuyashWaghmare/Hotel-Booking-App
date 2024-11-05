import { TestBed } from '@angular/core/testing';

import { ConfirmBookingService } from './confirm-booking.service';

describe('ConfirmBookingService', () => {
  let service: ConfirmBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
