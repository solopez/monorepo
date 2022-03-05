import { ItemDetail, Items } from '@games/data';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('items')
  async getProducts(@Query('search') search: string): Promise<Items> {
    const response = this.productService.getProducts(search);
    return response;
  }

  @Get('items/:id')
  getProduct(@Param('id') id: string): Promise<ItemDetail> {
    const response = this.productService.getProduct(id);
    return response;
  }
}
