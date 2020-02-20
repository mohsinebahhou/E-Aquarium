import { TestBed } from '@angular/core/testing';

import { EspeceServiceService } from './espece-service.service';

describe('EspeceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspeceServiceService = TestBed.get(EspeceServiceService);
    expect(service).toBeTruthy();
  });
});
