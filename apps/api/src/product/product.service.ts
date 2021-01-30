import { ItemDetail, Items } from '@meli/data';
import { HttpService, Injectable } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ProductService {
  limit = 4;
  constructor(private httpService: HttpService) {}

  async getProducts(query): Promise<Items> {
    let response = await this.httpService
      .get(`${environment.api.meli}/sites/MLA/search?q=${query}&limit=${this.limit}`)
      .toPromise();
    let items = response.data.results;
    let categories = [];
    const itemValues = items.map(
      (
        { id, title, thumbnail, condition, category_id, shipping, currency_id, address },
        i
      ) => {
        categories.push(category_id);
        const picture = thumbnail;
        const free_shipping = shipping.free_shipping;
        const city = address.state_name;
        const price = { currency: currency_id, amount: items[i].price };
        const response = {
          id,
          title,
          condition,
          picture,
          free_shipping,
          city,
          price,
        };
        return response;
      }
    );

    items = {
      items: itemValues,
      categories: categories,
    };
    return items;
  }

  async getProduct(id): Promise<ItemDetail> {
    const response = await forkJoin({
      content: this.httpService.get(`${environment.api.meli}/items/${id}`),
      description: this.httpService.get(
        `${environment.api.meli}/items/${id}/description`
      ),
    }).toPromise();
    const content = response.content.data;
    const description = response.description.data;
    const detail = {
      item: {
        id: content.id,
        title: content.title,
        condition: content.condition,
        picture: content.pictures[0].url,
        free_shipping: content.shipping.free_shipping,
        price: { currency: content.currency_id, amount: content.price },
        sold_quantity: content.sold_quantity,
        description: description.plain_text,
      },
    };
    return detail;
  }
}
