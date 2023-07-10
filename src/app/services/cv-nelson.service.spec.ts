import { TestBed } from '@angular/core/testing';

import { CvNelsonService } from './cv-nelson.service';

describe('CvNelsonService', () => {
  let service: CvNelsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvNelsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
