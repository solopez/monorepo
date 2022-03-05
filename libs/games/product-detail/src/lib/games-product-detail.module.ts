import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesProductDetailComponent } from './product-detail/product-detail.component';
import { GamesProductDetailRoutingModule } from './product-detail/product-detail.routing.module';

@NgModule({
  imports: [CommonModule, GamesProductDetailRoutingModule],
  declarations: [GamesProductDetailComponent],
  exports: [GamesProductDetailComponent],
})
export class GamesProductDetailModule {}
