import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { ICart } from 'src/app/interfaces/ICart';
import { IProductCart } from 'src/app/interfaces/IProductCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalProductsInCart!: number;
  productCart!: IProductCart;

  private _cart: ICart = {} as ICart;
  private readonly cartSubject: BehaviorSubject<ICart> = new BehaviorSubject(this._cart);
  cart$: Observable<ICart> = this.cartSubject.asObservable();

  constructor() {
    this.getCart();
  }

  getCart() {
    const storedCart = sessionStorage.getItem('cart');
    this._cart = storedCart ? JSON.parse(storedCart) : { productList: [] }
    this.cartSubject.next(this._cart);
  }

  addToCart(product: Product) {
    const productCart: IProductCart = { product, quantity: 1 };
    const existingProduct = this.checkProductInCart(productCart.product);

    existingProduct ? existingProduct.quantity += 1 :
      this._cart.productList.push(productCart);

    this.updateCart();
  }

  deleteFromCart(product: Product) {
    this._cart.productList = this._cart.productList.filter(productInCart => product.id !== productInCart.product.id);
    this.updateCart();
  }

  substractProductQuantity(productCart: IProductCart) {
    productCart.quantity > 1 ? productCart.quantity -= 1 : this.deleteFromCart(productCart.product);
    this.updateCart();
  }

  addProductQuantity(product: IProductCart) {
    product.quantity++;
    this.updateCart();
  }

  private checkProductInCart(product: Product) {
    return this._cart.productList.find(productInCart => product.id === productInCart.product.id);
  }

  private updateCart() {
    this.cartSubject.next(this._cart);
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
  }
}
