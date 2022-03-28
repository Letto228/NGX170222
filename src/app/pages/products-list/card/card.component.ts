import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/product';

@Component({
	selector: 'ngx-classwork-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input() product!: IProduct;
	@Output() addToBasket = new EventEmitter<IProduct>();

	onAddToBasket(event: Event) {
		event.stopPropagation();
		this.addToBasket.emit(this.product);
	}
}
