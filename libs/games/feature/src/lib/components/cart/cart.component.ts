import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'games-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  toggleCart = false;
  @Input() inCart;
  @Output() toggle = new EventEmitter<boolean>();

  handleToggle() {
    if (this.inCart) {
      this.toggleCart = !this.toggleCart;
      this.toggle.emit(this.toggleCart);
    }
  }
}
