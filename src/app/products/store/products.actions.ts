import { createAction, props } from '@ngrx/store';
import { Product } from '../products.model';

export const reqproducts = createAction('[Products] request products');
export const reqproductssuccess = createAction(
  '[Products] request products success',
  props<{ products: Product[] }>()
);
export const reqproductserror = createAction(
  '[Products] request products error',
  props<{ error: string }>()
);
