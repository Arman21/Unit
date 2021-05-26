import { TestBed } from '@angular/core/testing';
import { MakeCounterService } from './make-counter.service';

describe('MakeCounterService', () => {
  let service: MakeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
