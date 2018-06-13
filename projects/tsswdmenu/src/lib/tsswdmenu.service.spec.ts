import { TestBed, inject } from '@angular/core/testing';

import { TsswdmenuService } from './tsswdmenu.service';

describe('TsswdmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsswdmenuService]
    });
  });

  it('should be created', inject([TsswdmenuService], (service: TsswdmenuService) => {
    expect(service).toBeTruthy();
  }));
});
