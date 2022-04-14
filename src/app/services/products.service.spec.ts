import { ProductsService } from './products.service';
import { productsMock } from '../mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

const httpClient = {
	get(_url: string) {},
} as HttpClient;

describe('ProductsService', () => {
	let service: ProductsService;
	// let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			// imports: [HttpClientTestingModule],
			providers: [
				ProductsService,
				{
					provide: HttpClient,
					useValue: httpClient,
				},
			],
		});
		service = TestBed.inject(ProductsService);
		// service = new ProductsService(httpClient);
		// httpMock = TestBed.inject(HttpTestingController);

		spyOn(httpClient, 'get').and.returnValue(of(productsMock));
	});

	it('Получение продуктов', () => {
		service.getProducts$().subscribe((products) => {
			expect(products).toEqual(productsMock);
		});

		// httpMock.expectOne('/products').flush(productsMock);
	});
});
