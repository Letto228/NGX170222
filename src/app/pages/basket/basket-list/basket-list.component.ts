import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'ngx-classwork-basket-list',
	templateUrl: './basket-list.component.html',
	styleUrls: ['./basket-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketListComponent {
	basket$: Observable<IProduct[]> = this.basketService.basket$;

	constructor(private basketService: BasketService) {}
}
