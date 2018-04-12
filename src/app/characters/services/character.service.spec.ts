import { TestBed, inject } from '@angular/core/testing';

import { CharacterMockService } from './character-mock.service';

describe('CharacterMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterMockService]
    });
  });

  it('should be created', inject([CharacterMockService], (service: CharacterMockService) => {
    expect(service).toBeTruthy();
  }));
});
