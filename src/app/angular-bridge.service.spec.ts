import { TestBed } from '@angular/core/testing';

import { AngularBridgeService } from './angular-bridge.service';

describe('AngularBridgeService', () => {
  let service: AngularBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
