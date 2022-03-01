import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '@gamer/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gamer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  subscription: Subscription;
  toggleCart = false;
  @Input() inCart;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(private cartService: CartService) { }

  handleToggle() {
    if (this.inCart) {
      this.toggleCart = !this.toggleCart;
      this.toggle.emit(this.toggleCart);
    }
  }
}
