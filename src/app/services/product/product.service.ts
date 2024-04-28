import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';
import { ProductList } from 'src/app/interfaces/models/ProductList';
import { IProductContract } from 'src/app/interfaces/contracts/IProductContract';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'assets/data/products.json';
  private _productsList: ProductList = new ProductList([]);

  private readonly productsSubject: BehaviorSubject<ProductList> = new BehaviorSubject<ProductList>(new ProductList([]));
  products$: Observable<ProductList> = this.productsSubject.asObservable();

  constructor(private httpProduct: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.httpProduct.get<IProductContract[]>(this.URL)
      .pipe(map(response => new ProductList(response)))
      .subscribe({
        next: productList => {
          this._productsList = productList;
          this.updateProducts();
        },
        error: error => {
          console.error('Error while getting products', error);
        }
      });
  }

  deleteProduct(product: Product) {
    this._productsList.products = this._productsList.products.filter(productInJSON => product.id !== productInJSON.id);
    this.updateProducts();
  }

  addProduct(newProduct: Product) {
    this._productsList.products.push(newProduct);
    this.productsSubject.next(this._productsList);
    console.log(this.productsSubject.value);
  }

  private updateProducts() {
    this.productsSubject.next(this._productsList);
  }
}
