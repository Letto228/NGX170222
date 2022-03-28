import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'ngx-classwork-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	product$!: Observable<IProduct | undefined>;

	constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.product$ = this.activatedRoute.paramMap.pipe(
			switchMap((paramMap) => this.productsService.getProduct$(paramMap.get('id') as string)),
		);
	}
}
