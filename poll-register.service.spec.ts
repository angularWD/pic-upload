import { TestBed } from '@angular/core/testing';

import { PollRegisterService } from './poll-register.service';

describe('PollRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollRegisterService = TestBed.get(PollRegisterService);
    expect(service).toBeTruthy();
  });
});
