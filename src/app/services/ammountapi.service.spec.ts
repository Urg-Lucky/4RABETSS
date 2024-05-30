import { TestBed } from '@angular/core/testing';

import { AmmountapiService } from './ammountapi.service';

describe('AmmountapiService', () => {
  let service: AmmountapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmmountapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
