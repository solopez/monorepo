import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Items, ItemDetail } from '@games/data';

@Controller() 
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('items')
  @ApiOperation({ summary: 'Get a list of games, optionally filtered by search query' })
  @ApiQuery({
    name: 'search', 
    required: false, 
    description: 'Optional search query to filter items by title',
    type: String, 
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched the items',
    type: Items, 
  })
  getProducts(@Query('search') search = ''): Promise<Items> {
    return this.productService.getProducts(search);
  }

  @Get('items/:id')
  @ApiOperation({ summary: 'Get a specific game by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched the product details',
    type: ItemDetail, 
  })
  getProduct(@Param('id') id: string): Promise<ItemDetail> {
    return this.productService.getProduct(id);
  }
}
