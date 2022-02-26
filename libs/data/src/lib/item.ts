import { Price } from './price';

export class Item {
  id?:  number;
  title?: string;
  price?: Price;
  thumbnail?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
  city?: string;
}
