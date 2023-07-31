import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './products.model';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductsActions from './store/products.actions';
import * as ProductSelectors from './store/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$!: Product[];
  loading$!: boolean;
  error$!: null;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private store: Store<{ products$: Product[] }>
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products$ = res.products;
      console.log(res.products);
    });
    this.store.dispatch(ProductsActions.reqproducts());
  }
  // public products: Product[] = [];
  // public isLoading: boolean = false;

  // constructor(
  //   private productsService: ProductsService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.isLoading = true;
  //   this.productsService.getProducts()
  //   .subscribe((res: any) => {
  //     this.isLoading = false;
  //     console.log(res.products);
  //     this.products = res.products;
  //   });
  // }

  detail(product: any) {
    this.router.navigate(['/products', product.id]);
  }
}
