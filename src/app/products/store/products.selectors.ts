import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const productsState = createFeatureSelector<ProductsState>('products');
export const loading = 
createSelector(productsState, (state) => state.loading);

export const products = 
createSelector(
  productsState,
  (state) => state.products
);

export const error = createSelector(productsState, (state) => state.error);
