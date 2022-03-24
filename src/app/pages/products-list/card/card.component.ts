import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from 'src/app/interface/product';

@Component({
	selector: 'ngx-classwork-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input() product!: IProduct;
}
