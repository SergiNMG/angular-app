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

  private readonly productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private httpProduct: HttpClient) { }

  getProducts(): void {
    this.httpProduct.get<Product[]>(this.URL).subscribe({
      next: products => {
        this.productsSubject.next(products);
      },
      error: error => {
        console.error('Error while getting products', error);
      }
    });
  }
}
