import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@gamer/data';
import { ProductService } from '../../../../../apps/gamer/src/app/services/product.service';
import { CONDITIONS } from './condition.enum';

@Component({
  selector: 'gamer-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  item: Item;
  conditions = CONDITIONS;
  error = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.item = data.item;
      },
      () => {
        this.error = 'Something went wrong. Please try again later.';
      }
    );
  }
}
