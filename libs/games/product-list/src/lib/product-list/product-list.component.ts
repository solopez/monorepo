import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '@games/data';
import { ProductService } from '@games/services';

@Component({
  selector: 'games-product-list',
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
    this.activatedRoute.queryParams.subscribe((params) => {
      this.getProducts(params?.search);
    });
  }

  getProducts(query = ''): void {
    this.productService.getProducts(query).subscribe(
      (data) => {
        this.items = data.items;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.router.navigate(['']);
      }
    );
  }

  installGame(item: any) {
    item.isInstalling = true;

    setTimeout(() => {
      item.isInstalling = false;
    }, 3000);
  }
}
