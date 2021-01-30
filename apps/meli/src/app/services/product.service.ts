import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Items, ItemDetail } from '@meli/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(query: string): Observable<Items> {
    return this.httpClient.get<Items>(
      `${environment.api.meli}/items?search=${query}`
    );
  }

  getProduct(id: string): Observable<ItemDetail> {
    return this.httpClient.get<ItemDetail>(`${environment.api.meli}/items/${id}`);
  }
}
