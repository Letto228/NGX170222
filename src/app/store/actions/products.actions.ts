import { createAction } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product';

enum ProductsActionTypes {
	LoadProducts = '[Products] Load products',
	SetProducts = '[Products] Set products',
	ResetProducts = '[Products] Reset products',
	UpdateProductsCount = '[Products] Update products count',
}

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);
export const setProducts = createAction(
	ProductsActionTypes.SetProducts,
	(products: IProduct[]) => ({ products }),
);
export const resetProducts = createAction(ProductsActionTypes.ResetProducts);
export const updateProductsCount = createAction(
	ProductsActionTypes.UpdateProductsCount,
	(id: string, count: number) => ({ id, count }),
);
