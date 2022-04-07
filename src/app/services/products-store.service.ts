import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import { IProduct } from '../interface/product';
import { setProducts } from '../store/actions/products.actions';
import { IState } from '../store/reducers';
import { ProductsService } from './products.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private _products$ = new BehaviorSubject<IProduct[]>([]);
	private getProductsSubscription: Subscription | undefined;

	get products$(): Observable<IProduct[]> {
		return this._products$.asObservable();
	}

	constructor(private productsService: ProductsService, private store: Store<IState>) {}

	loadProducts() {
		if (this.getProductsSubscription) {
			this.getProductsSubscription.unsubscribe();
		}

		this.getProductsSubscription = this.productsService
			.getProducts$()
			.pipe(take(1))
			.subscribe((products) => {
				this.store.dispatch(setProducts(products));
				this.getProductsSubscription = undefined;
			});
	}

	setProducts(products: IProduct[]) {
		this._products$.next(products);
	}
}
