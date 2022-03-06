import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolButtonModule } from '@ui';
import { GamesProductDetailComponent } from './product-detail.component';

const routes: Routes = [{ path: '', component: GamesProductDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SolButtonModule],
  exports: [RouterModule],
})
export class GamesProductDetailRoutingModule {}
