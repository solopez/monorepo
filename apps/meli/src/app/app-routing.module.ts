import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'items/:id', loadChildren: () => import("@meli/product-detail").then(m => m.ProductDetailModule)},
  { path: 'items', loadChildren: () => import("@meli/product-list").then(m => m.ProductListModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
