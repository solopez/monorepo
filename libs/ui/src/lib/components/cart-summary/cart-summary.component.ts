import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CartService } from '@gamer/services';

@UntilDestroy()
@Component({
  selector: 'gamer-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  @Input() inCart;
  toggleCart = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.itemsChanged.pipe(untilDestroyed(this)).subscribe(
      (item) => (this.inCart = item)
    );
  }

  handleToggle() {
    this.toggleCart = true;
  }

  add(item) {
    this.cartService.add(item);
  }

  remove(item) {
    this.cartService.remove(item);
  }
}
