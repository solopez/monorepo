import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CartModule, CartSummaryModule } from '@gamer/ui';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, CartModule, CartSummaryModule],
  exports: [SearchComponent]
})
export class SearchModule {}
