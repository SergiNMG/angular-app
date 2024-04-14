import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.getCart());
  cart$: Observable<Cart> = this.cartSubject.asObservable();

  constructor() { }

  getCart(): Cart {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { id: 1, productList: [] };
  }

  addToCart(product: Product) {
    const currentCart = this.cartSubject.value;
    currentCart.productList.push(product);
    this.updateCart(currentCart);
  }

  deleteFromCart(id: number) {
    const currentCart = this.cartSubject.value;
    console.log(currentCart.productList);
    currentCart.productList = currentCart.productList.filter(product => product.id !== id);
    console.log(currentCart.productList);
    this.updateCart(currentCart);
  }

  private updateCart(cart: Cart) {
    this.cartSubject.next(cart);
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }

}
