import { Item } from "../libs/data/src"
import { CartComponent } from "../libs/games/feature/src/lib/components/cart/cart.component"


export default {
  title: 'Features/Cart'
}

export const empty = () => ({
  moduleMetadata: {
    imports: []
  },
  component: CartComponent,
  template: `<div style="display: flex;
  justify-content: center;
  padding: 1.5rem;
  margin: 0 5.5rem;"><games-cart [inCart]="[]"></games-cart></div>`
})

export const withItems = () => ({
  moduleMetadata: {
    imports: []
  },
  component: CartComponent,
  template: `<div style="display: flex;
  justify-content: center;
  padding: 1.5rem;
  margin: 0 5.5rem;"><games-cart [inCart]="items"></games-cart></div>`,
  props: {
    items: [
      new Item(),
      new Item(),
      new Item()
    ]
  }
})