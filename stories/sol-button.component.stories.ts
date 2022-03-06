import { SolButtonComponent } from "../libs/ui/src/lib/components/sol-button/sol-button.component"


export default {
  title: 'UI/Buttons'
}

export const basic = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SolButtonComponent,
  template: `<div style="width:25%"><sol-button [title]="'Add to cart'"></sol-button></div>`
})

export const addGradientHostClass = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SolButtonComponent,
  template: `<div style="width:25%"><sol-button class="add-gradient" [title]="'Add to cart'"></sol-button></div>`
})


export const danger = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SolButtonComponent,
  template: `<div style="width:25%"><sol-button [buttonClass]="'btn-danger'" [title]="'Add to cart'"></sol-button></div>`
})

export const warning = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SolButtonComponent,
  template: `<div style="width:25%"><sol-button [buttonClass]="'btn-warning'" [title]="'Add to cart'"></sol-button></div>`
})

export const success = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SolButtonComponent,
  template: `<div style="width:25%"><sol-button [buttonClass]="'btn-success'" [title]="'Add to cart'"></sol-button></div>`
})