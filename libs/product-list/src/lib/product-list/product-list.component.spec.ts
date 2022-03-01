import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from '@gamer/data';
import { ProductService } from '@gamer/services';
import { of } from 'rxjs';
import { ProductListComponent } from './product-list.component';

class ActivatedRouteStub {
  queryParams = of({ search: 'motorola' });
}

class ProductServiceStub {
  getProducts() {
    const item = new Item();
    item.price.amount = 34322;
    return of({ items: [item] });
  }
}
describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProductListComponent],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
