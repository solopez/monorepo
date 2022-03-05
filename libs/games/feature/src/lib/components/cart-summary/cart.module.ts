import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';
import { CartSummaryComponent } from './cart-summary.component';

@NgModule({
  declarations: [CartSummaryComponent],
  imports: [CommonModule, RouterModule, CartModule],
  exports: [CartSummaryComponent],
})
export class CartSummaryModule {}
