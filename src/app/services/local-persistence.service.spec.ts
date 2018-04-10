import { TestBed, inject } from '@angular/core/testing';

import { LocalPersistenceService } from './local-persistence.service';

describe('LocalPersistenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalPersistenceService]
    });
  });

  it('should be created', inject([LocalPersistenceService], (service: LocalPersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
