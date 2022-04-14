import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IProduct } from 'src/app/interface/product';
import { productsMock } from 'src/app/mocks/products.mock';
import { ProductsListModule } from '../products-list.module';

import { CardComponent } from './card.component';

describe('CardComponent unit', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CardComponent],
		})
			.overrideComponent(CardComponent, {
				set: {
					template: '',
				},
			})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		component.product = productsMock[0] as IProduct;
	});

	it('Выбор продукта spy', () => {
		const spy = spyOn(component.addToBasket, 'emit');

		component.onAddToBasket(new Event(''));

		expect(spy).toHaveBeenCalledWith(productsMock[0]);
	});

	it('Выбор продукта subscribe', () => {
		component.addToBasket.subscribe((product) => {
			expect(product).toEqual(productsMock[0] as IProduct);
		});

		component.onAddToBasket(new Event(''));
	});
});

describe('CardComponent integration', () => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			// declarations: [CardComponent],
			// imports: [MatCardModule],
			imports: [ProductsListModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;

		component.product = productsMock[0] as IProduct;

		fixture.detectChanges();
	});

	it('Клик по кнопке "Add"', () => {
		const debugElement = fixture.debugElement;

		debugElement.query(By.css('[automation-id="add-button"]')).triggerEventHandler('click', {
			stopPropagation() {},
		});

		component.addToBasket.subscribe((product) => {
			expect(product).toEqual(productsMock[0] as IProduct);
		});
	});
});
