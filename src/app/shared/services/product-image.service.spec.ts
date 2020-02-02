import { TestBed } from '@angular/core/testing';

import { ProductImageService } from './product-image.service';

describe('ProductImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductImageService = TestBed.get(ProductImageService);
    expect(service).toBeTruthy();
  });
});
