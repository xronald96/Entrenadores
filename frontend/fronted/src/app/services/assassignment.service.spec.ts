import { TestBed } from '@angular/core/testing';

import { AssassignmentService } from './assassignment.service';

describe('AssassignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssassignmentService = TestBed.get(AssassignmentService);
    expect(service).toBeTruthy();
  });
});
