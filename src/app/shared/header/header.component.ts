import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { IProductCart } from 'src/app/interfaces/IProductCart';
import { ICart } from 'src/app/interfaces/ICart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalProductsInCart: number = 0;

  constructor(private router: Router,
    private cartService: CartService) {
    this.checkTotalProductsInCart();
  }

  checkTotalProductsInCart() {
    this.cartService.cart$.subscribe({
      next: cart => {
        this.countProductsNumber(cart);
      },
      error: error => {
        console.error('Error while getting products', error);
      }
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  private countProductsNumber(cart: ICart) {
    this.totalProductsInCart = 0;
    cart.productList.forEach((product: IProductCart) => {
      this.totalProductsInCart += product.quantity;
    });
  }
}
