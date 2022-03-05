import { Item, ItemDetail, Items } from '@games/data';
import { HttpService, Injectable } from '@nestjs/common';
import { GAMES } from './games.constant';

@Injectable()
export class ProductService {
  games: Items = GAMES;
  constructor(private httpService: HttpService) {}

  async getProducts(query): Promise<Items> {
    const filteredGames = this.games.items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    return { items: filteredGames };
  }

  async getProduct(id): Promise<ItemDetail> {
    const game = this.games.items.find((item) => item.id == id);
    return { item: game };
  }

  getAmount(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
