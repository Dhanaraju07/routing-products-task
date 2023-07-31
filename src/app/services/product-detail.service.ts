import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  getProductDetail(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
