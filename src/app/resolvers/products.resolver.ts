import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProduct[]> {
	constructor(private productsService: ProductsService) {}

	resolve(): Observable<IProduct[]> {
		return this.productsService.getProducts$().pipe(delay(3000));
	}
}
