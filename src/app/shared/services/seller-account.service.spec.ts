import { TestBed } from '@angular/core/testing';

import { SellerAccountService } from './seller-account.service';

describe('SellerAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerAccountService = TestBed.get(SellerAccountService);
    expect(service).toBeTruthy();
  });
});
