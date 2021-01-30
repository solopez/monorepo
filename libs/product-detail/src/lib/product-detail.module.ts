import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailRoutingModule } from './product-detail/product-detail.routing.module';

@NgModule({
  imports: [CommonModule, ProductDetailRoutingModule],
  declarations: [ProductDetailComponent],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
