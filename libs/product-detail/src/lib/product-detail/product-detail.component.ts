import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@gamer/data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CartService } from '../../../../../apps/gamer/src/app/services/cart.service';
import { ProductService } from '../../../../../apps/gamer/src/app/services/product.service';
import { CONDITIONS } from './condition.enum';

@UntilDestroy()
@Component({
  selector: 'gamer-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  item: Item;
  conditions = CONDITIONS;
  error = '';
  inCart;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.cartService.itemsChanged.pipe(untilDestroyed(this)).subscribe(
      (item) => (this.inCart = item)
    );
  }

  getProduct() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.item = data.item;
      },
      () => {
        this.error = 'Something went wrong. Please try again later.';
      }
    );
  }

  addToCart() {
    this.cartService.add(this.item);
  }
}
