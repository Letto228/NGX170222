import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
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

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.products$ = this.productsService.getProducts$();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}
}
