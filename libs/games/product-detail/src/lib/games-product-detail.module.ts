import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesProductDetailComponent } from './product-detail/product-detail.component';
import { GamesProductDetailRoutingModule } from './product-detail/product-detail.routing.module';
import { SolButtonModule } from '@ui';

@NgModule({
  imports: [CommonModule, GamesProductDetailRoutingModule, SolButtonModule],
  declarations: [GamesProductDetailComponent],
  exports: [GamesProductDetailComponent],
})
export class GamesProductDetailModule {}
