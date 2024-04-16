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

  @Output() deleteFromCartEvent = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.suscribeCartService();
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteFromCart(product);
  }

  suscribeCartService() {
    this.cartService.cart$.subscribe({
      next: cart => {
        this.cart = cart;
        this.cart = this.cartService.getCart();
      },
      error: error => {
        console.error('Error getting cart', error)
      }
    });
  }
}