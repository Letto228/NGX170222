import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IProduct } from '../interface/product';
import { productsMock } from '../mocks/products.mock';
import { PipesModule } from './pipes.module';
import { ProdictsFilterPipe } from './prodicts-filter.pipe';

@Component({
	selector: 'ngx-classwork',
	template: `
		<div automation-id="products-len">
			{{ (products | prodictsFilter: productName).length }}
		</div>
	`,
})
class TestComponent {
	@Input() productName!: string;
	@Input() products!: IProduct[];
}

describe('ProdictsFilterPipe', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [PipesModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Фильтрация по иени продукта(integration)', () => {
		component.products = productsMock;
		component.productName = (productsMock[0] as IProduct).name;

		fixture.detectChanges();

		const divElement = fixture.debugElement.query(By.css('[automation-id="products-len"]'))
			.nativeElement as HTMLElement;

		expect(divElement.innerHTML).toEqual('1');
	});

	it('Фильтрация по иени продукта', () => {
		const pipe = new ProdictsFilterPipe();

		expect(pipe).toBeTruthy();
		expect(pipe.transform(productsMock, productsMock[0]?.name as string)).toEqual([
			productsMock[0],
		] as IProduct[]);
	});
});
