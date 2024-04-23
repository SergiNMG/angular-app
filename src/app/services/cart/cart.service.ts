import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { Cart } from 'src/app/interfaces/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalProductsInCart!: number;

  private _cart: Cart = {} as Cart;
  private readonly cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this._cart);
  cart$: Observable<Cart> = this.cartSubject.asObservable();

  constructor() {
    const storedCart = sessionStorage.getItem('cart');
    this._cart = storedCart ? JSON.parse(storedCart) : { productList: [] }
    this.cartSubject.next(this._cart);
  }

  addToCart(product: Product) {
    const existingProduct = this.checkProductInCart(product);
    existingProduct ? existingProduct.quantity += 1 :
      this._cart.productList.push({ ...product, quantity: 1 });
    this.updateCart();
  }

  deleteFromCart(product: Product) {
    this._cart.productList = this._cart.productList.filter(productInCart => product.id !== productInCart.id);
    this.updateCart();
  }

  substractProductQuantity(product: Product) {
    product.quantity > 1 ? product.quantity -= 1 : this.deleteFromCart(product);
    this.updateCart();
  }

  addProductQuantity(product: Product) {
    product.quantity++;
    this.updateCart();
  }

  private checkProductInCart(product: Product) {
    return this._cart.productList.find(productInCart => product.id === productInCart.id);
  }

  private updateCart() {
    this.cartSubject.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
  }
}
