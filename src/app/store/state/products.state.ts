import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { IProduct } from "src/app/interface/product";

export interface IProductsState extends EntityState<IProduct> {
    basketIds: string[];
}

export const productsEntityAdapter = createEntityAdapter<IProduct>();

export const productsInitialState = productsEntityAdapter.getInitialState({
    basketIds: [],
});