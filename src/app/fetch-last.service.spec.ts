import { TestBed } from '@angular/core/testing';

import { FetchLastService } from './fetch-last.service';

describe('FetchLastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchLastService = TestBed.get(FetchLastService);
    expect(service).toBeTruthy();
  });
});
