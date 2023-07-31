import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/services/products.service';
import * as ProductActions from './products.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  constructor(
    private productsService: ProductsService,
    private actions: Actions
  ) {}
  requestProducts = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.reqproducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map(
            (products: any) =>
              ProductActions.reqproductssuccess({ products }) as any
          ),
          catchError((error) =>
            of(ProductActions.reqproductserror({ error: error.message }))
          )
        )
      )
    )
  );
}
