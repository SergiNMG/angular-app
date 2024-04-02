import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import mockProducts from 'src/app/models/products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  
  @Input() product!: Product;

  @Output() deleteProductEvent = new EventEmitter<number>();
  @Output() addToWishListEvent = new EventEmitter<boolean>();

  deleteProduct(id: number){
    this.deleteProductEvent.emit(id);
  }

  addToWishList(favorite: boolean){
    this.addToWishListEvent.emit(favorite);
  }

}
