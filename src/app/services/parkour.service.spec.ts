import { TestBed } from '@angular/core/testing';

import { ParkourService } from './parkour.service';

describe('ParkourService', () => {
  let service: ParkourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
