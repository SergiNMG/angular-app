import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICart } from 'src/app/interfaces/ICart';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/interfaces/models/Product';
import { IProductCart } from 'src/app/interfaces/IProductCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: ICart;
  totalAmount: number = 0;
  productQuantity: number = 0;

  @Output() deleteFromCartEvent = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.suscribeCartService();
  }

  suscribeCartService() {
    this.cartService.cart$.subscribe({
      next: cart => {
        this.cart = cart;
        this.updateCartData(this.cart);
      },
      error: error => {
        console.error('Error getting cart', error)
      }
    });
  }

  updateCartData(cart: ICart) {
    this.totalAmount = 0;
    cart.productList.forEach(productInCar => {
      this.totalAmount += (productInCar.product.price * productInCar.quantity);
      this.productQuantity += productInCar.quantity;
    });
  }

  substractProductQuantity(product: IProductCart) {
    this.cartService.substractProductQuantity(product);
  }

  addProductQuantity(product: IProductCart) {
    this.cartService.addProductQuantity(product);
  }

  updateProductQuantity() {
    this.cart.productList.forEach((prouctInCart: IProductCart) => {
      this.substractProductQuantity(prouctInCart);
      this.addProductQuantity(prouctInCart);
    });
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteFromCart(product);
  }
}
