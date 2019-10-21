import { TestBed } from '@angular/core/testing';

import { GipyServiceService } from './gipy-service.service';

describe('GipyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GipyServiceService = TestBed.get(GipyServiceService);
    expect(service).toBeTruthy();
  });
});
