import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '@games-environment';
import { Items, ItemDetail } from '@games/data';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(query = ''): Observable<Items> {
    const searchQuery = query?.trim();

    const url = searchQuery
      ? `${environment.api.games}/items?search=${searchQuery}`
      : `${environment.api.games}/items`;

    return this.httpClient.get<Items>(url).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of({ items: [] });
      })
    );
  }

  getProduct(id: string): Observable<ItemDetail> {
    return this.httpClient.get<ItemDetail>(
      `${environment.api.games}/items/${id}`
    ).pipe(
      catchError((error) => {
        console.error('Error fetching product:', error);
        return of(null);
      })
    );
  }
}
