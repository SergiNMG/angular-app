import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

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
    this.cartService.cart$.subscribe(cart => {
      this.totalProductsInCart = 0;
      cart.productList.forEach(product => {
        this.totalProductsInCart += product.quantity;
      })
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
