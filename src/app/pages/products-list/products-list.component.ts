import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { BasketService } from 'src/app/services/basket.service';
import { loadProducts } from 'src/app/store/actions/products.actions';
import { IState } from 'src/app/store/reducers';
import { getProducts } from 'src/app/store/reducers/products.reducer';

@Component({
	selector: 'ngx-classwork-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	searchText = '';

	products$!: Observable<IProduct[]>;
	product$!: Observable<IProduct>;

	constructor(private basketService: BasketService, private store: Store<IState>) {}

	ngOnInit(): void {
		this.products$ = this.store.pipe(select(getProducts));
		this.store.dispatch(loadProducts());
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}

	addProduct(product: IProduct) {
		this.basketService.addProductToBasket(product);
	}
}
