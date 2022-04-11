import { IProduct } from '../interface/product';
import { productsMock } from '../mocks/products.mock';
import { ProdictsFilterPipe } from './prodicts-filter.pipe';

describe('ProdictsFilterPipe', () => {
	it('Фильтрация по иени продукта', () => {
		const pipe = new ProdictsFilterPipe();

		expect(pipe).toBeTruthy();
		expect(pipe.transform(productsMock, productsMock[0]?.name as string)).toEqual([
			productsMock[0],
		] as IProduct[]);
	});
});
