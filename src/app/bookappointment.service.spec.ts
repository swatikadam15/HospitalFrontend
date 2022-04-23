import { TestBed } from '@angular/core/testing';

import { BookappointmentService } from './bookappointment.service';

describe('BookappointmentService', () => {
  let service: BookappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
