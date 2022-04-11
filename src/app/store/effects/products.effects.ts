import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { loadProducts, setProducts } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
	constructor(private actions$: Actions, private productsService: ProductsService) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProducts),
			switchMap(() =>
				this.productsService
					.getProducts$()
					.pipe(switchMap((products) => [setProducts(products)])),
			),
		),
	);
}
