import { Injectable } from '@nestjs/common';
import { ItemDetail, Items } from '@games/data'; 
import { GAMES } from './games.constant';

@Injectable()
export class ProductService {
  getProducts(search?: string): Promise<Items> {
    if (search && search.trim()) {
      const filteredItems = GAMES.items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      return Promise.resolve({ items: filteredItems });
    }
    return Promise.resolve({ items: GAMES.items });
  }

  getProduct(id: string): Promise<ItemDetail> {
    const item = GAMES.items.find(item => item.id === Number(id));
    return Promise.resolve({ item });
  }
}
