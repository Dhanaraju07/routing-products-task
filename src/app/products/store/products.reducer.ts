import { createReducer, on } from '@ngrx/store';
import { Product } from '../products.model';
import * as Actions from './products.actions';

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

export const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

export const ProductsReducer = createReducer(
  initialState,
  on(Actions.reqproducts, (state) => {
    return {
      ...state,
      loading: true,
      products: [],
      error: null,
    };
  }),
  on(Actions.reqproductssuccess, (state, { products }) => {
    return {
      ...state,
      loading: false,
      products,
      error: null,
    };
  }),
  on(Actions.reqproductserror, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  })
);
