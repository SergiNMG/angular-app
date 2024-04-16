import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Cart } from '../../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'assets/data/products.json';
  private _productsList = this.getProductsList();

  private readonly productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private httpProduct: HttpClient) { }

  getProducts(): void {
    this.httpProduct.get<Product[]>(this.URL).subscribe({
      next: products => {
        this._productsList = products;
        this.productsSubject.next(products);
      },
      error: error => {
        console.error('Error while getting products', error);
      }
    });
  }

  getProductsList(): Product[] {
    return this._productsList;
  }

  deleteProduct(product: Product) {
    this._productsList = this._productsList.filter(productInJSON => product.id !== productInJSON.id);
    this.updateProducts()
  }

  updateProducts() {
    this.productsSubject.next(this._productsList);
  }
}
