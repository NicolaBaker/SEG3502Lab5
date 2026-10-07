import { TestBed } from '@angular/core/testing';

import { EmployeeDb } from './employee-db';

describe('EmployeeDb', () => {
  let service: EmployeeDb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
