import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private URL = 'assets/data/products.json';
  products$ = this.productsSubject.asObservable();
  cartList: Product[] = [];

  constructor(private httpProduct: HttpClient) { }

  // getProducts(): void {
  //   this.httpProduct.get<any[]>('assets/data/products.json').pipe(
  //     tap(products => this.productsSubject.next(products)),
  //     catchError(error => {
  //       console.error('Error while getting products: ', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  getProducts(): void {
    this.httpProduct.get<Product[]>(this.URL).subscribe({
      next: products => {
        this.productsSubject.next(products)
      },
      error: error => {
        console.error('Error while getting products', error);
      }
    });
  }

  addToCart(product: Product) {
    this.cartList.push(product);
  }

  deleteFromCart(id: number) {
    this.cartList = this.cartList.filter(p => p.id !== id);
  }

}
