import { TestBed } from '@angular/core/testing';

import { UpdateProductService } from './update-product.service';

describe('UpdateProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateProductService = TestBed.get(UpdateProductService);
    expect(service).toBeTruthy();
  });
});
