import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProduct$(productId: string): Observable<IProduct | undefined> {
		return this.getProducts$().pipe(
			map((products) => products.find(({ id }) => id === productId)),
		);
	}

	getProducts$(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>('/products');
	}
}
