import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@games/services';
import { of } from 'rxjs';
import { Item } from '@games/data';
import { GamesProductDetailComponent } from './product-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

class ActivatedRouteStub {
  snapshot = { params: { id: 'MLA224' } };
}

class ProductServiceStub {
  getProduct() {
    const item = new Item();
    item.price = { amount: 3323, currency: 'ARS' };

    return of({ item: item });
  }
}

describe('GamesProductDetailComponent', () => {
  let component: GamesProductDetailComponent;
  let fixture: ComponentFixture<GamesProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesProductDetailComponent],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
