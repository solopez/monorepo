import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartSummaryComponent } from '../libs/games/feature/src/lib/components/cart-summary/cart-summary.component';
import { CartService } from '../libs/games/services/src';

export default {
  title: 'Features/CartSummary',
};
const items = [
  {
    id: 1,
    price: {
      amount: 5000,
      calculatedPrice: 25000,
    },
    quantity: 5,
    title: 'DBD',
  },
  {
    id: 2,
    price: {
      amount: 7500,
      calculatedPrice: 187000,
    },
    quantity: 25,
    title: 'League of legends',
  },
  {
    id: 3,
    price: {
      amount: 800,
      calculatedPrice: 12000,
    },
    quantity: 15,
    title: 'Dota',
  },
];

class MockCartService extends CartService {
  itemsInCart = items;
}

export const withItems = () => ({
  moduleMetadata: {
    imports: [],
    providers: [{ provide: CartService, useClass: MockCartService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  component: CartSummaryComponent,
  template: `<div style="position: relative; bottom: 17rem;">
  <games-cart-summary [inCart]="items"></games-cart-summary></div>`,
  props: {
    toggleCart: true,
    items: items,
  },
});
