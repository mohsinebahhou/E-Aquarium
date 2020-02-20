import { TestBed } from '@angular/core/testing';

import { BassinServiceService } from './bassin-service.service';

describe('BassinServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BassinServiceService = TestBed.get(BassinServiceService);
    expect(service).toBeTruthy();
  });
});
