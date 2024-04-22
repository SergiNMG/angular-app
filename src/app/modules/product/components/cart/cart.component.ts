import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Cart;
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

  updateCartData(cart: Cart) {
    this.totalAmount = 0;
    cart.productList.forEach(productInCar => {
      this.totalAmount += (productInCar.price * productInCar.quantity);
      this.productQuantity += productInCar.quantity;
    });
  }

  substractProductQuantity(product: Product) {
    this.cartService.substractProductQuantity(product);
  }

  addProductQuantity(product: Product) {
    this.cartService.addProductQuantity(product);
  }

  updateProductQuantity() {
    this.cart.productList.forEach(prouctInCart => {
      this.substractProductQuantity(prouctInCart);
      this.addProductQuantity(prouctInCart);
    });
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteFromCart(product);
  }
}
