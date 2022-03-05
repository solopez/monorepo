import { Injectable } from '@angular/core';
import { Item } from '@games/data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemsInCart = [];
  itemsChanged = new Subject();

  add(item) {
    if (this.isItemInCart(item)) {
      item.quantity = ++item.quantity;
      item.price.calculatedPrice = this.getProductSubtotalPrice(
        item.price.amount,
        item.quantity
      );
    } else {
      item.quantity = 1;
      item.price.calculatedPrice = item.price.amount;
      this.itemsInCart.push(item);
    }
    this.itemsChanged.next(this.itemsInCart);
  }

  remove(item: Item) {
    const index = this.itemsInCart.map((el) => el.id).indexOf(item.id);
    this.itemsInCart[index].quantity = --item.quantity;
    this.itemsInCart[
      index
    ].price.calculatedPrice = this.getProductSubtotalPrice(
      item.price.amount,
      item.quantity
    );
    if (!this.itemsInCart[index].quantity) {
      this.itemsInCart.splice(index, 1);
    }
    this.itemsChanged.next(this.itemsInCart);
  }

  getProductSubtotalPrice(amount: number, quantity: number) {
    return amount * quantity;
  }

  isItemInCart(item) {
    return !!this.itemsInCart.find((element) => element.id === item.id);
  }
}
