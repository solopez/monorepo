import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '@gamer/data';
import { ProductService } from '@gamer/services';

@Component({
  selector: 'gamer-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  items: Array<Item>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      if (param && param.search) {
        this.getProducts(param.search);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  getProducts(query) {
    this.productService.getProducts(query).subscribe(
      (data) => {
        this.items = data.items;
      },
      () => {
        this.router.navigate(['']);
      }
    );
  }
}
