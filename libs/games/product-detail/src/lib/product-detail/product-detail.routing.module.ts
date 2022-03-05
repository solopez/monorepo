import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesProductDetailComponent } from './product-detail.component';

const routes: Routes = [{ path: '', component: GamesProductDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesProductDetailRoutingModule {}
