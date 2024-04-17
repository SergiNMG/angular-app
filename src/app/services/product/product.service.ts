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
  private _productsList: Product[] = [];

  private readonly productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private httpProduct: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.httpProduct.get<Product[]>(this.URL).subscribe({
      next: products => {
        this._productsList = products;
        this.updateProducts();
      },
      error: error => {
        console.error('Error while getting products', error);
      }
    });
  }

  deleteProduct(product: Product) {
    this._productsList = this._productsList.filter(productInJSON => product.id !== productInJSON.id);
    this.updateProducts();
  }

  addProduct(newProduct: Product) {
    this._productsList.push(newProduct);
    this.productsSubject.next(this._productsList);
    console.log(this.productsSubject.value);
  }

  private updateProducts() {
    this.productsSubject.next(this._productsList);
  }

  // saveProduct() {
  //   this.httpProduct.post<Product[]>(this.URL, this._productsList).subscribe({
  //     next: updatedProducts => {
  //       this._productsList = updatedProducts;
  //       this.productsSubject.next(updatedProducts);
  //     },
  //     error: error => {
  //       console.error('Error posting product', error);
  //     }
  //   });
  // }

}
