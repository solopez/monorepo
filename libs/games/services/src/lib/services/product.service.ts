import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../apps/games/src/environments/environment';
import { Items, ItemDetail } from '@games/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(query: string): Observable<Items> {
    return this.httpClient.get<Items>(
      `${environment.api.games}/items?search=${query}`
    );
  }

  getProduct(id: string): Observable<ItemDetail> {
    return this.httpClient.get<ItemDetail>(
      `${environment.api.games}/items/${id}`
    );
  }
}
