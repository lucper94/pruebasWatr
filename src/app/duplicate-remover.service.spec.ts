import { TestBed } from '@angular/core/testing';

import { DuplicateRemoverService } from './duplicate-remover.service';

describe('DuplicateRemoverService', () => {
  let service: DuplicateRemoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuplicateRemoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
