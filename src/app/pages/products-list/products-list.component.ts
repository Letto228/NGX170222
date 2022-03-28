import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'ngx-classwork-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	searchText = '';

	products$!: Observable<IProduct[]>;

	constructor(private productsService: ProductsService, private basketService: BasketService) {}

	ngOnInit(): void {
		this.products$ = this.productsService.getProducts$();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}

	addProduct(product: IProduct) {
		this.basketService.addProductToBasket(product);
	}
}
