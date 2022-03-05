import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'items/:id',
    loadChildren: () =>
      import('@games/product-detail').then(
        (m) => m.GamesProductDetailModule
      ),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('@games/product-list').then((m) => m.GamesProductListModule),
  },
  { path: '**', redirectTo: '' },
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
