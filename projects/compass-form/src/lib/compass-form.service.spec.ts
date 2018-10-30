import { TestBed } from '@angular/core/testing';

import { CompassFormService } from './compass-form.service';

describe('CompassFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompassFormService = TestBed.get(CompassFormService);
    expect(service).toBeTruthy();
  });
});
