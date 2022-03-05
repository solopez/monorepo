import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@games/data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductService, CartService } from '@games/services';
import { CONDITIONS } from './condition.enum';

@UntilDestroy()
@Component({
  selector: 'games-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class GamesProductDetailComponent implements OnInit {
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
    this.cartService.itemsChanged
      .pipe(untilDestroyed(this))
      .subscribe((item) => (this.inCart = item));
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
