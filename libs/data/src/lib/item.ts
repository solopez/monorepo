import { Price } from './price';

export class Item {
  id:  number;
  title: string;
  price: Price;
  quantity?: number;
  thumbnail?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
}
