import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductDetailService } from '../services/product-detail.service';

@Component({
  selector: 'app-Product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: any = {};

  public isLoading: boolean = false;

  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.fetchProductData(id);
      }
    });
  }

  fetchProductData(id: string): void {
    this.isLoading = true;
    this.productDetailService.getProductDetail(id)
      .subscribe((res: any) => {
        this.isLoading = false;
        console.log(res);
        this.product = res;
      });
  }

  goPrevious() {
    let previousId = this.product.id - 1;
    this.router.navigate(['/products', previousId]);
  }
  goNext() {
    let nextId = this.product.id + 1;
    this.router.navigate(['/products', nextId]);
  }
}
