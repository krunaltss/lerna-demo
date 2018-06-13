import { TestBed, inject } from '@angular/core/testing';

import { TsswdloginService } from './tsswdlogin.service';

describe('TsswdloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsswdloginService]
    });
  });

  it('should be created', inject([TsswdloginService], (service: TsswdloginService) => {
    expect(service).toBeTruthy();
  }));
});
