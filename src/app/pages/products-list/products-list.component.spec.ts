import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IProduct } from 'src/app/interface/product';
import { productsMock } from 'src/app/mocks/products.mock';
import { BasketService } from 'src/app/services/basket.service';
import { loadProducts } from 'src/app/store/actions/products.actions';
import { IState } from 'src/app/store/reducers';
import { getProducts } from 'src/app/store/reducers/products.reducer';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsListComponent } from './products-list.component';
import { ProductsListModule } from './products-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsListComponent', () => {
	let component: ProductsListComponent;
	let fixture: ComponentFixture<ProductsListComponent>;
	let mockStore: MockStore;
	let dispatchSpy: any;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [BasketService, provideMockStore()],
		}).compileComponents();
	});

	beforeEach(() => {
		mockStore = TestBed.inject(MockStore);
		dispatchSpy = spyOn(mockStore, 'dispatch');

		mockStore.overrideSelector(
			getProducts as MemoizedSelector<IState, IProduct[]>,
			productsMock,
		);

		fixture = TestBed.createComponent(ProductsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Загрузка продуктов', () => {
		component.ngOnInit();

		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts());

		component.products$.subscribe((value) => {
			expect(value).toEqual(productsMock);
		});
	});
});
