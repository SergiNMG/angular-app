import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart = this.getCart();

  private readonly cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this._cart);
  cart$: Observable<Cart> = this.cartSubject.asObservable();

  constructor() {
    const storedCart = sessionStorage.getItem('cart');
    this._cart = storedCart ? JSON.parse(storedCart) : { productList: [] }
    this.cartSubject.next(this._cart);
  }

  getCart(): Cart {
    return this._cart;
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

  private updateCart() {
    this.cartSubject.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart))
  }

  checkProductInCart(product: Product) {
    return this._cart.productList.find(productInCart => product.id === productInCart.id);
  }
}
