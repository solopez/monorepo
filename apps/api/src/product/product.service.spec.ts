import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '@nestjs/common';
import { of } from 'rxjs';
class HttpServiceStub {
  get() {}
}
describe('ProductService', () => {
  let service: ProductService;
  let getProductsSpy;
  const items = {
    items: [
      {
        id: 'sku_001',
      },
      {
        id: 'sku_002',
      },
    ],
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: HttpService, useClass: HttpServiceStub },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);

    getProductsSpy = spyOn(service, 'getProducts').and.returnValue(items);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get products', () => {
    const products = service.getProducts({});

    expect(products['items'][1].id).toEqual('sku_002');
  });

  it('should get one product', () => {
    spyOn(service, 'getProduct').and.returnValue({item: { id: 'sku_001'}});

    const product = service.getProduct('sku_001');

    expect(product['item'].id).toEqual('sku_001');
  });
});
