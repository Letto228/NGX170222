import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'ngx-classwork-basket-list',
	templateUrl: './basket-list.component.html',
	styleUrls: ['./basket-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketListComponent implements OnInit {
	basket$: Observable<IProduct[]> = this.basketService.basket$.pipe(
		tap(basket => {
			this.form.setControl(
				'counters',
				this.formBuilder.array(
					new Array(basket.length)
						.fill(1)
						.map((value) => [value, [Validators.max(10), Validators.min(0)]]),
				),
			);
		}),
	);
	form = this.formBuilder.group({
		counters: this.formBuilder.array([]),
	});

	model = 10;

	constructor(private basketService: BasketService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.form.valueChanges.subscribe(console.log);
	}
}
