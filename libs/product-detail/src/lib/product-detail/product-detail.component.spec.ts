import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@gamer/services';
import { of } from 'rxjs';
import { Item } from '@gamer/data';
import { ProductDetailComponent } from './product-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

class ActivatedRouteStub {
  snapshot = { params: {id: 'MLA224'} };
}

class ProductServiceStub {
  getProduct() {
    const item = new Item();
    item.price = {amount: 3323, currency: 'ARS'};

    return of({ item: item });
  }
}

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceStub,
        },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteStub,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
