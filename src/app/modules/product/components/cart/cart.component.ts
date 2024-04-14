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
    this.cartService.cart$.subscribe({
      next: cart => {
        this.cart = cart;
      },
      error: error => {
        console.error('Error al actualizar el carrito', error)
      }
    });
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteFromCart(product.id);
  }
}
