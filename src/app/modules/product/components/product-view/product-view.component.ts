import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input() product!: Product;

  @Output() deleteProductEvent = new EventEmitter<Product>();
  @Output() addToWishListEvent = new EventEmitter<boolean>();
  @Output() addToCartEvent = new EventEmitter<Product>();

  deleteProduct(product: Product) {
    this.deleteProductEvent.emit(product);
  }

  addToWishList(favorite: boolean) {
    this.addToWishListEvent.emit(favorite);
  }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

}
